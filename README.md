# HTTP Basic Auth con Spring

## Usage
### Backend

```
cd backend
./mvnw spring-boot:run
```

### Frontend

```
cd frontend
npm install
npm run dev
```

## Instructions
- Check that the application works (visit `http://localhost:5173`). What does this application do? Take some time to get familiar with the structure of the project (backend and frontend).
- Add the `spring-boot-starter-security` dependency to the `pom.xml` file
- Add the following `SecurityConfiguration.java` class to your Spring project. 

```
package org.factoriaf5.backend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
				.authorizeHttpRequests((authorize) -> authorize
						.anyRequest().authenticated()
				)
				.httpBasic(withDefaults());
	
		return http.build();
	}

	
	@Bean
	public UserDetailsService userDetailsService() {
		UserDetails user = User.withDefaultPasswordEncoder()
				.username("user")
				.password("password")
				.roles("USER")
				.build();
		return new InMemoryUserDetailsManager(user);
	}
	
}
```

- Before continuing, discuss with the rest of the class what this new class is supposed to do.
- Visit `localhost:8080/members` and see what happens. Introduce the user and password and inspect the HTTP Requests.
- Visit `localhost:5173` and see what happens. Fix the `NameApi.js` class in the frontend to make it work with HTTP Basic Authentication.
