let userId: (number | string);

function userDefine(userId: (number | string)){
    console.log(`My userId is ${userId}`)
}

userId = 210215;
userDefine(userId);

userId = '210215';
userDefine(userId);