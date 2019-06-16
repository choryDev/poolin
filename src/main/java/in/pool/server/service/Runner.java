package in.pool.server.service;

import in.pool.server.dto.ErrResponseDto;
import in.pool.server.dto.RequestDto;
import in.pool.server.dto.ResponseDto;
import in.pool.server.dto.ResponseLinks;
import in.pool.server.dto.error.BusinessLogicalException;
import in.pool.server.utils.keys.ENV;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Map;

@Slf4j
@Component
public abstract class Runner<K extends RequestDto, T extends ResponseDto> extends CoreSpace{

    protected abstract boolean auth();

    public interface iEventResource<T> {
        ResponseLinks link(T response);
    }

    public interface iEventRunner<K, T> {
        T runner(K request);
    }

    public ResponseEntity execute(HttpServletRequest req, K requesetDto, iEventRunner<K, T> runner, iEventResource<T> eventResource, String... paths){
        long startMemory = (Runtime.getRuntime().freeMemory() / 1024) / (Runtime.getRuntime().totalMemory() / 1024);
        ResponseLinks links;
        String className = getClass().getName();
        StringBuffer sb = new StringBuffer();
        StopWatch main = new StopWatch();

        main.start();
        try{
            String lang_code = "";
            String accTp = "";
            requesetDto.setTmp(Arrays.asList(paths));
            requesetDto.setSess_auth_key(req.getHeader(ENV.SESSION_KEY_NAME));
            Map<String, String[]> queryMap = req.getParameterMap();
            if(queryMap != null && !queryMap.isEmpty()){
                String[] arr1 = queryMap.get("access_tp");
                String[] arr2 = queryMap.get("lang");

                if(arr1 == null) writeError(requesetDto, "900-000");
                else accTp = queryMap.get("access_tp")[0];
                if("".equals(accTp)) writeError(requesetDto, "900-000");
                if(arr2 == null) lang_code = "kr";
                else lang_code = queryMap.get("lang")[0];

            }else {
                accTp = requesetDto.getAccess_tp();
                lang_code = requesetDto.getLang().getLangType();
            }

            requesetDto.setLang(lang_code);
            requesetDto.setAccess_tp(accTp);

            sb.append("\n## API Request Access ##\n");
            sb.append(" [ " + req.getPathInfo()+ " ] \n");
            sb.append(" [ " + req.getContextPath()+ " ] \n");

            if(auth())  chkSession(requesetDto);

            T result = runner.runner(requesetDto);

            links = eventResource.link(result);

            result.setResult(HttpStatus.OK);

        }catch (BusinessLogicalException e) {
            e.printStackTrace();
            endingLog(sb, className, main, startMemory);
            errorEndingLog(sb, e, log);
            ErrResponseDto responseDto = new ErrResponseDto();
            responseDto.setResult(e.getErrHttpStatus());
            responseDto.setErr_code(e.getErr_code());
            responseDto.setMessage(e.getMsg());
            return ResponseEntity.status(e.getErrHttpStatus()).body(responseDto);
        }catch (Throwable throwable){
            throwable.printStackTrace();
            ResponseDto responseDto = new ResponseDto();
            responseDto.setResult(HttpStatus.BAD_REQUEST);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseDto);
        }
        endingLog(sb, className, main, startMemory);
        sb.append("## API Request Success ##");
        log.info(sb.toString());
        return ResponseEntity.ok().body(links);
    }

}
