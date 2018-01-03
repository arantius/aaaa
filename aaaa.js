'use strict';

function aaaatob(a) {
  // The scripts in question are embedded into the source of the page.
  // They, when decoded, all start
  // "!function t(e,n,o){function r(a,s){if(!n[a]){if(!e[a]){ ..."
  // And since base64 is an encoding, not an encryption, their encoded forms
  // all start
  // "IWZ1bmN0aW9uIHQoZSxuLG8pe2Z1bmN0aW9uIHIoYSxzKXtpZighb..."
  // though the parameters' names vary, the opening pattern "!function" is
  // always there.  For now?  Just detect that without even decoding the
  // large (50k worth!) of scripts' possible data.
  if (a.startsWith('IWZ1bmN0aW9u')) return '';
  return atob(a);
}

exportFunction(aaaatob, window, {'defineAs': 'atob'});
