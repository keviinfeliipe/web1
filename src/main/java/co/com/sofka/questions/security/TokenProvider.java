package co.com.sofka.questions.security;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
public class TokenProvider {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(TokenProvider.class);

    public boolean validateToken(String token) {
        FirebaseToken decodedToken = null;
        try {
            decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
        } catch (FirebaseAuthException e) {
            log.error("Firebase Exception {}", e.getLocalizedMessage());
        }

        return decodedToken != null;

    }

    public Authentication getAuthentication(String token) {
        FirebaseToken decodedToken = null;
        try {
            decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
        } catch (FirebaseAuthException e) {
            log.error("Firebase Exception {}", e.getLocalizedMessage());
        }

        CustomPrincipal customPrincipal = new CustomPrincipal();
        customPrincipal.setUid(decodedToken.getUid());
        customPrincipal.setPhoneNumber(decodedToken.getClaims().toString());
        return new UsernamePasswordAuthenticationToken(customPrincipal, decodedToken, null);
    }
}
