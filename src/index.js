module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  let strLength = str.length;
  while(strLength>1) {
      for (let i = 0; i < str.length; i++) {
          for (let j = 0; j < bracketsConfig.length; j++) {
              if (str[i] === bracketsConfig[j][0] && str[i + 1] === bracketsConfig[j][1]) str.splice(i, 2);
          }
      }
      strLength -=2;
      if(str.length === 0) return true;
  }

      return false;
};
