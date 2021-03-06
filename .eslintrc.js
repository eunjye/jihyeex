module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
	    /* 마지막 쉼표에 관한 규칙을 수정했습니다.
	     * 하지만 이 파일은 JSON 파일이므로, 마지막 쉼표를 허용하는
	     * 이 파일에는 마지막 쉼표를 쓸 수 없습니다. 
	     * 라고 했지만 이 지적은 사라졌음.*/
	"comma-dangle": [
	    2,
	    "always-multiline"
	],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
