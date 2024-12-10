import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoogleSignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Google's OAuth 2.0 client library
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, // You'll need to add this to your .env file
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById('googleSignInButton'),
          {
            theme: 'outline',
            size: 'large',
            type: 'standard',
            text: 'signin_with',
            shape: 'rectangular',
            logo_alignment: 'left',
          }
        );
      };
    };

    loadGoogleScript();
  }, []);

  const handleCredentialResponse = (response) => {
    // Handle the JWT credential returned by Google
    console.log('Google token:', response.credential);
    // Here you would typically:
    // 1. Send this token to your backend
    // 2. Verify the token
    // 3. Create a session
    // 4. Redirect to dashboard
    navigate('/agents');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div id="googleSignInButton"></div>
      <p className="text-sm text-gray-500">
        By signing in, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
} 