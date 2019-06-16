package in.pool.server.config;

import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.InetAddress;

@Configuration
public class ESConfig {

    @Value("${elasticsearch.host}")
    private String EsHost;

    @Value("${elasticsearch.port}")
    private int EsPort;


    @Bean
    public Client client() throws Exception {
        Settings esSettings = Settings.builder()
            .build();
        TransportClient transportClient = new PreBuiltTransportClient(esSettings).addTransportAddress(
            new TransportAddress(InetAddress.getByName(EsHost), EsPort));
        return transportClient;
    }

}