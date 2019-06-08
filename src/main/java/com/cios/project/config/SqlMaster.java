package com.cios.project.config;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class SqlMaster {

    @Autowired
    @Qualifier("masterSqlSessionTemplate")
    private SqlSessionTemplate m;

    private RuntimeException throwException(Throwable t){
        return new RuntimeException(t);
    }

    /**
     * Select the one
     * @param path
     * @param param
     * @return
     */
    public <T> T selectOne(String path, Object param){
        try {
            return this.m.selectOne(path, param);
        }catch (Throwable t){
            throw throwException(t);
        }
    }

    /**
     * Select the List
     * @param path
     * @param param
     * @return
     */
    public Object selectList(String path, Object param){
        try {
            return this.m.selectList(path, param);
        }catch (Throwable t){
            throw throwException(t);
        }

    }

    /**
     * Insert the data
     * @param path
     * @param param
     * @return
     */
    public Object insert(String path, Object param){
        try{
            return this.m.insert(path, param);
        }catch (Throwable t){
            throw throwException(t);
        }
    }

    /**
     * Delete the data
     */
    public Object delete(String path, Object param){
        try {
            return this.m.delete(path, param);
        }catch (Throwable t){
            throw throwException(t);
        }
    }

    /**
     * Update the data
     * @param path
     * @param param
     * @return
     */
    public Object update(String path, Object param){
        try{
            return this.m.update(path, param);
        }catch (Throwable t){
            throw throwException(t);
        }
    }
}