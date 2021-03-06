import {isString,isNumber} from '../functions';

/*
* 验证类
*
* */
export default class Validate {
	constructor() {
		/*
		* _validateType = null; //验证类型
		* _default = '' //默认值
		* _field = '' ,//绑定字段名称
		* */

		this._required = false; //是否必填

		this._validateList = [];
	}
	/*
	* @param {String} errMsg 错误说明
	* @param {String/key} unlessField 排除字段，当这个字段不会空时，不需要唯一性
	* */
	required(errMsg,unlessField) {
		this._required = {
			errorMsg:errMsg && isString(errMsg)?errMsg:'%s is required',
			unlessField,
		};
		return this
	}

	default(defaultData){
		this._default = defaultData;
		return this;
	}

	min(num,errMsg){
		this._minlangth = {
			number:num,
			errorMsg:errMsg && isString(errMsg)?errMsg:`%s can't be less than "${num}", Current value: %v`
		};
		return this;
	}

	max(num,errMsg){
		this._maxlangth = {
			number:num,
			errorMsg:errMsg && isString(errMsg)?errMsg:`%s can't be more than "${num}", Current value: %v`
		};

		return this;
	}

	addValidate(validate,msg){
		if(typeof validate === "function"){
			this._validateList.push({
				validate: validate,
				errorMsg: msg && isString(msg) ? msg : '%s fail verification, Current value: %v'
			});
		}
		return this;
	}
}


