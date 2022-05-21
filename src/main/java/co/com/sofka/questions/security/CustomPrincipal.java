package co.com.sofka.questions.security;

public class CustomPrincipal {

    private String uid;
    private String phoneNumber;

    public CustomPrincipal() {
    }

    public CustomPrincipal(String uid, String phoneNumber) {
        this.uid = uid;
        this.phoneNumber = phoneNumber;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("CustomPrincipal{");
        sb.append("uid='").append(uid).append('\'');
        sb.append(", phoneNumber='").append(phoneNumber).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
