package in.pool.server.users.models;

import lombok.Data;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 * The type User entity.
 */
@Entity
@Table(name = "users")
@Data
public class UserEntity implements UserDetails, Serializable {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long id;
    private String username;
    private String password;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialNonExpired;
    private boolean enabled;

    @ManyToMany(cascade=CascadeType.ALL)
    private Set<RoleEntity> roles;


    @Override
    public Set<RoleEntity> getAuthorities() {
        return roles;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
