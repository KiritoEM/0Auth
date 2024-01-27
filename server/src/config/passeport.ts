// passport.ts
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {
  Strategy as FacebookStrategy,
  Profile as FacebookProfile,
} from "passport-facebook";
import dotenv from "dotenv";
dotenv.config();

//passeport Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}/api/auth/google/callback`,
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    },
    (_accessToken, _refreshToken, profile, done) => {
      console.log("profile de l' utilisateur", profile);
      return done(null, profile);
    }
  )
);

//passeport Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}/api/auth/facebook/callback`,
      profileFields: ["id", "displayName", "email"],
    },
    (_accessToken, _refreshToken, profile: FacebookProfile, done) => {
      try {
        console.log("Profile de l'utilisateur Facebook", profile);
        return done(null, profile);
      } catch (error) {
        console.error(
          "Erreur lors de la gestion de l'authentification Facebook",
          error
        );
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done) => {
  done(null, obj);
});

export default passport;
