(function () {
  'use strict';

  angular.module('pb.ds.patterns').config(function ($stateProvider) {
    $stateProvider.state('patterns', {
      abstract: true,
      url: '/patterns',
      templateUrl: 'modules/patterns/templates/patterns.html',
      controller: 'PatternsController as patterns',
      data: {
        pageTitle: 'Patterns',
        access: 'public',
        bodyClass: 'patterns'
      }
    })

      .state('patterns.headersfooters', {
        url: '/headersfooters',
        templateUrl: 'modules/patterns/templates/headers-footers.html',
        controller: 'PatternsController as patterns',
        data: {
          pageTitle: 'Patterns - Header & Footers',
          access: 'public',
          bodyClass: 'patterns headers-footers'
        }
      })

      .state('patterns.dragdrop', {
        url: '/dragdrop',
        templateUrl: 'modules/patterns/templates/drag-drop.html',
        controller: 'DragDropController as dragdrop',
        data: {
          pageTitle: 'Patterns - Drag Drop',
          access: 'public',
          bodyClass: 'patterns dragdrop'
        }
      })

      .state('patterns.welcome', {
        url: '/welcome',
        templateUrl: 'modules/patterns/templates/welcome-landing.html',
        controller: 'WelcomeController as welcome'
      })

      .state('patterns.signinup', {
        url: '/signinup',
        templateUrl: 'modules/patterns/templates/sign-in-sign-up.html',
        data: {
          pageTitle: 'Patterns: Sign In and Sign Up'
        }
      })

      // this is the signin example page
      .state('patterns.signin', {
        url: '/signin',
        templateUrl: 'modules/patterns/templates/signin.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Sign In',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the signin invalid email page
      .state('patterns.invalidemail', {
        url: '/invalidemail',
        templateUrl: 'modules/patterns/templates/signin-invalid-email.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Invalid Email',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the password email don't match page
      .state('patterns.invalidpassword', {
        url: '/invalidpassword',
        templateUrl: 'modules/patterns/templates/signin-invalid-password.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Invalid Password',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the complete registration example page
      .state('patterns.completeregistration', {
        url: '/completeregistration',
        templateUrl: 'modules/patterns/templates/complete-registration.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Complete Registration',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the unsuccessful attempt page
      .state('patterns.unsuccessfulattempt', {
        url: '/unsuccessfulattempt',
        templateUrl: 'modules/patterns/templates/unsuccessful-attempt.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Unsuccessful Attempt',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the account locked live chat example page
      .state('patterns.accountlockedchat', {
        url: '/accountlockedchat',
        templateUrl: 'modules/patterns/templates/account-locked-live-chat.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Account Locked - Live Chat',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the account locked no chat example page
      .state('patterns.accountlocked', {
        url: '/accountlocked',
        templateUrl: 'modules/patterns/templates/account-locked-no-chat.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Account Locked - No Chat',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the reset password example page
      .state('patterns.reset-password', {
        url: '/resetpassword',
        templateUrl: 'modules/patterns/templates/reset-password.html',
        data: {
          pageTitle: 'Patterns: Reset Password',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Forgot Password - Email Question
      .state('patterns.forgotpassword', {
        url: '/forgotpassword',
        templateUrl: 'modules/patterns/templates/forgot-password-email.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Forgot Password Email',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Forgot Password: Security Question, Reset by Question, Return to Sign In
      .state('patterns.forgotpassword-question', {
        url: '/forgotpassword-question',
        templateUrl: 'modules/patterns/templates/forgot-password-question.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Forgot Password: Question',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Forgot Password: Security Question, Answer Does Not Match
      .state('patterns.forgotpassword-error', {
        url: '/forgotpassword-error',
        templateUrl: 'modules/patterns/templates/forgot-password-error.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Forgot Password: Error',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Forgot Password - Email sent feedback
      .state('patterns.emailsent', {
        url: '/emailsent',
        templateUrl: 'modules/patterns/templates/email-sent.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Email Sent',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Change Password  - Confirm password
      .state('patterns.changepassword', {
        url: '/changepassword',
        templateUrl: 'modules/patterns/templates/change-password.html',
        data: {
          pageTitle: 'Patterns: Change Password',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Change Password  - No security questions needed
      .state('patterns.changepassword-noquestion', {
        url: '/changepassword-noquestion',
        templateUrl: 'modules/patterns/templates/change-password-no-question.html',
        data: {
          pageTitle: 'Patterns: Change Password - No Question',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Change Password  - No security questions needed
      .state('patterns.changepassword-confirmpassword', {
        url: '/changepassword-confirmpassword',
        templateUrl: 'modules/patterns/templates/change-password-confirm-password.html',
        data: {
          pageTitle: 'Patterns: Confirm Password',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Change Password  - No security questions needed
      .state('patterns.passwordreset-success', {
        url: '/passwordreset-success',
        templateUrl: 'modules/patterns/templates/password-reset-success.html',
        data: {
          pageTitle: 'Patterns: Reset Success',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is the Email invitation with payment info needed  - create password
      .state('patterns.invitation-withoutpayment', {
        url: '/invitation-without-payment',
        templateUrl: 'modules/patterns/templates/invitation-without-payment.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Invitation without Payment',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is Email invitation with payment info needed  - create password
      .state('patterns.invitation-withpayment', {
        url: '/invitation-with-payment',
        templateUrl: 'modules/patterns/templates/invitation-with-payment.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Invalid with Payment',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is Email invitation with payment info needed  - purchase power account selection if there are more than one Purchase Power account
      .state('patterns.signup-purchasepower', {
        url: '/signup-purchase-power',
        templateUrl: 'modules/patterns/templates/signup-purchase-power.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Purchase Power',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is Invitation Sign up  - Admin invitation
      .state('patterns.signup-admininvite', {
        url: '/signup-admininvite',
        templateUrl: 'modules/patterns/templates/signup-admin-invite.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Admin Invite',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is Invitation Sign up  - PB Invitation with existing account
      .state('patterns.signup-existingaccount', {
        url: '/signup-existing-account',
        templateUrl: 'modules/patterns/templates/signup-existing-account.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Existing Account',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is Invitation Sign up  - PB Invitation with existing account + Payment is required
      .state('patterns.signup-withpayment', {
        url: '/signup-with-payment',
        templateUrl: 'modules/patterns/templates/signup-with-payment.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Signup with Payment',
          bodyClass: 'fullscreen signin'
        }
      })

      // this is Sign In Page -  post registration complete
      .state('patterns.signup-postregistration', {
        url: '/signup-post-registration',
        templateUrl: 'modules/patterns/templates/signup-post-registration.html',
        controller: 'SignInController as signin',
        data: {
          pageTitle: 'Patterns: Post-Registration',
          bodyClass: 'fullscreen signin'
        }
      })

      .state('patterns.dashboards', {
        url: '/dashboards',
        templateUrl: 'modules/patterns/templates/dashboards.html'
      })

      .state('patterns.gettingstarted', {
        url: '/gettingstarted',
        templateUrl: 'modules/patterns/templates/getting-started.html'
      })

      .state('patterns.hamburger', {
        url: '/hamburger',
        templateUrl: 'modules/patterns/templates/hamburger-overview.html',
        controller: 'HamburgerController'
      })

      .state('patterns.facetedsearch', {
        url: '/patterns/facetedsearch',
        templateUrl: 'modules/patterns/templates/faceted-search.html'
      })

      .state('patterns.errorpages', {
        url: '/errorpages',
        templateUrl: 'modules/patterns/templates/error-pages.html'
      })

      .state('patterns.forms', {
        url: '/forms',
        templateUrl: 'modules/patterns/templates/forms-containers.html'
      })

      .state('patterns.registration', {
        url: '/patterns/registration',
        templateUrl: 'modules/patterns/templates/registration.html',
        controller: 'RegistrationController as registration'
      })

      .state('patterns.undermaintenance', {
        url: '/patterns/undermaintenance',
        templateUrl: 'modules/patterns/templates/under-maintenance.html',
        controller: 'UnderMaintenanceController as under'
      })

      .state('patterns.500', {
        url: '/patterns/500',
        templateUrl: 'modules/patterns/templates/500.html',
        controller: '500Controller'
      })

      .state('patterns.404', {
        url: '/patterns/404',
        templateUrl: 'modules/patterns/templates/404.html',
        controller: '404Controller'
      });
  });
})();
