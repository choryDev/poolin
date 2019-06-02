package in.pool.server.utils.crypt;

public class AuthKey {
    /*
     * 비대칭키.
     */
    public final static int KEY_LENGTH      		= 512;
    public final static int MSG_BLOCK_LENGTH    	= 53;
    public final static int ENCRYPTED_MSG_LENGTH 	= 64;
    public final static String PUBLIC_KEY = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAI3NavMKRbw8rZg0HFaUO39VWy5gZibRoVu+CYEmZsIr032UTIrVoTCOFF9eBOK4b95mlEmr+VDKk3guwN7SLwUCAwEAAQ==";
    public final static String PRIVATE_KEY = "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAjc1q8wpFvDytmDQcVpQ7f1VbLmBmJtGhW74JgSZmwivTfZRMitWhMI4UX14E4rhv3maUSav5UMqTeC7A3tIvBQIDAQABAkAm8cawrx6N3yBSD+XEhXt9siSTrRgBC0vElYGovbI1G0l+wgfoap3THVAP+CSLqJpTZd2gJJLBSMmfa7HIekmhAiEAxuqKaPBE8jZIOw1k6D8LZX8yqYIv4AJqm7BICloHez0CIQC2fv2tH46eJDNJDVu9u2XXIFk86sFH8ggHQKZsC2lfaQIgPTdnGz5+aXBNMGdB27uzPSw1IjefljgIKRvKP+1PCh0CIE/QHjW21XLINj2+v96stI9vMFf5+2nxqh0x4xbhrsXxAiEAp8INq4GCiJ6m30mT0VnqJi/d8kSf2QoOmxSY0Uj/sX0=";

    public final static int _SHA256_DIGEST_BLOCKLEN = 64;
    public final static int _SHA256_DIGEST_VALUELEN = 32;
    public final static int _K[] = {
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
        0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc,
        0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
        0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
        0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
        0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    };

    // DES, RSA
    public final static String ENCRYT_TYPE = "RSA";
}
