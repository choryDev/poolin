package in.pool.server.users.models;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user_role")
@Data
public class RoleEntity implements GrantedAuthority, Serializable {
    @Id
    @GeneratedValue
    @Column(name = "role_id")
    private Long id;
    @ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<UserEntity> users = new ArrayList<>();
    private String name;

    public RoleEntity() {
    }

    public RoleEntity(String name) {
        this.name = name;
    }

    @Override
    public String getAuthority() {
        return name;
    }
}