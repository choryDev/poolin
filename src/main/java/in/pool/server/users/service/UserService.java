package in.pool.server.users.service;

import in.pool.server.users.models.RoleEntity;
import in.pool.server.users.models.UserEntity;
import in.pool.server.users.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * The type User service.
 */
@Service
public class UserService implements UserDetailsService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username);
    }

    /**
     * Save user.
     *
     * @param user  the user
     * @param roles the roles
     */
    public void saveUser(UserEntity user, String[] roles) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Set<RoleEntity> rolesSet = new HashSet<>();
        for(String role:roles){
            rolesSet.add(new RoleEntity(role));
        }
        user.setRoles(rolesSet);
        userRepository.save(user);
    }

}
