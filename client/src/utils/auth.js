import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        // console.log('Decoded Token For getProfile', decoded);
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        // console.log('Token for loggedIn:', token);
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            // console.log('Decoded Token for isTokenExpired:', decoded);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            // console.log('Error Decoding Token:', err);
            return false;
        }
    }

    getToken() {
        
        return localStorage.getItem('id_token');
    }

    login(IdToken) {
        localStorage.setItem('id_token', IdToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}


export default new AuthService();