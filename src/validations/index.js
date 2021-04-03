import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach((rule) => extend(rule, rules[rule]));

// eslint-disable-next-line
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, { ...validation });
}

extend('chars_and_numbers', {
  validate(value) {
    return value.test(/^[a-zA-Z0-9_.-]*$/);
  },
  message: 'Your {_field_} must have charachters and numbers.',
});

