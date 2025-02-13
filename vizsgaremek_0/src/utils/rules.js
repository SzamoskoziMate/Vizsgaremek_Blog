import { defineRule, configure } from "vee-validate";
import * as AllRules from "@vee-validate/rules"
import { localize, setLocale } from "@vee-validate/i18n";
import hu from "@vee-validate/i18n/dist/locale/hu.json"

for(const [ruleName, ruleFn] of Object.entries(AllRules)){
    if(typeof ruleFn === "function"){
        defineRule(ruleName, ruleFn);
    }
}

const fieldsMixin = {
    ...hu,
    names:{
        username: 'felhasználónév',
        email: 'email cím',
        password: 'jelszó'
    }
}
