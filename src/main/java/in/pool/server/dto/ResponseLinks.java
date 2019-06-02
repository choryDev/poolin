package in.pool.server.dto;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;

public class ResponseLinks<T extends ResponseDto> extends Resource<T> {
    public ResponseLinks(T content, Link... links) {
        super(content, links);
    }
}