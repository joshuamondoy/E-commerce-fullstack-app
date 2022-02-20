export default {
    // Security > API > Trusted Origins and added a new origin. for cors error
    oidc: {
        clientId: '0oa3xexywvVAfsgYq5d7',
        issuer: 'https://dev-83448469.okta.com/oauth2/default', // Octa domain
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }

}
