!function(root,factory){"function"==typeof define&&define.amd?define(factory):"object"==typeof exports?module.exports=factory():root.returnExports=factory()}(this,function(){function Empty(){}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}function isPrimitive(input){var type=typeof input;return null===input||"undefined"===type||"boolean"===type||"number"===type||"string"===type}function toPrimitive(input){var val,valueOf,toStr;if(isPrimitive(input))return input;if(valueOf=input.valueOf,isFunction(valueOf)&&(val=valueOf.call(input),isPrimitive(val)))return val;if(toStr=input.toString,isFunction(toStr)&&(val=toStr.call(input),isPrimitive(val)))return val;throw new TypeError}var call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,_Array_slice_=prototypeOfArray.slice,array_splice=Array.prototype.splice,array_unshift=(Array.prototype.push,Array.prototype.unshift),_toString=prototypeOfObject.toString,isFunction=function(val){return"[object Function]"===prototypeOfObject.toString.call(val)},isRegex=function(val){return"[object RegExp]"===prototypeOfObject.toString.call(val)},isArray=function(obj){return"[object Array]"===_toString.call(obj)},isArguments=function(value){var str=_toString.call(value),isArgs="[object Arguments]"===str;return isArgs||(isArgs=!isArray(str)&&null!==value&&"object"==typeof value&&"number"==typeof value.length&&value.length>=0&&isFunction(value.callee)),isArgs};Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(!isFunction(target))throw new TypeError("Function.prototype.bind called on incompatible "+target);for(var args=_Array_slice_.call(arguments,1),binder=function(){if(this instanceof bound){var result=target.apply(this,args.concat(_Array_slice_.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(_Array_slice_.call(arguments)))},boundLength=Math.max(0,target.length-args.length),boundArgs=[],i=0;boundLength>i;i++)boundArgs.push("$"+i);var bound=Function("binder","return function ("+boundArgs.join(",")+"){return binder.apply(this,arguments)}")(binder);return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,owns=call.bind(prototypeOfObject.hasOwnProperty);(supportsAccessors=owns(prototypeOfObject,"__defineGetter__"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__));var spliceWorksWithEmptyObject=function(){var obj={};return Array.prototype.splice.call(obj,0,0,1),1===obj.length}(),omittingSecondSpliceArgIsNoop=0===[1].splice(0).length,spliceNoopReturnsEmptyArray=function(){var a=[1,2],result=a.splice();return 2===a.length&&isArray(result)&&0===result.length}();spliceNoopReturnsEmptyArray&&(Array.prototype.splice=function(){return 0===arguments.length?[]:array_splice.apply(this,arguments)}),omittingSecondSpliceArgIsNoop&&spliceWorksWithEmptyObject||(Array.prototype.splice=function(start,deleteCount){if(0===arguments.length)return[];var args=arguments;return this.length=Math.max(toInteger(this.length),0),arguments.length>0&&"number"!=typeof deleteCount&&(args=_Array_slice_.call(arguments),args.length<2?args.push(toInteger(deleteCount)):args[1]=toInteger(deleteCount)),array_splice.apply(this,args)}),1!==[].unshift(0)&&(Array.prototype.unshift=function(){return array_unshift.apply(this,arguments),this.length}),Array.isArray||(Array.isArray=isArray);var boxedString=Object("a"),splitString="a"!==boxedString[0]||!(0 in boxedString),properlyBoxesContext=function(method){var properlyBoxesNonStrict=!0,properlyBoxesStrict=!0;return method&&(method.call("foo",function(_,__,context){"object"!=typeof context&&(properlyBoxesNonStrict=!1)}),method.call([1],function(){"use strict";properlyBoxesStrict="string"==typeof this},"x")),!!method&&properlyBoxesNonStrict&&properlyBoxesStrict};Array.prototype.forEach&&properlyBoxesContext(Array.prototype.forEach)||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&"[object String]"===_toString.call(this)?this.split(""):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(!isFunction(fun))throw new TypeError;for(;++i<length;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map&&properlyBoxesContext(Array.prototype.map)||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&"[object String]"===_toString.call(this)?this.split(""):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(!isFunction(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter&&properlyBoxesContext(Array.prototype.filter)||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&"[object String]"===_toString.call(this)?this.split(""):object,length=self.length>>>0,result=[],thisp=arguments[1];if(!isFunction(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every&&properlyBoxesContext(Array.prototype.every)||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&"[object String]"===_toString.call(this)?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if(!isFunction(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some&&properlyBoxesContext(Array.prototype.some)||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&"[object String]"===_toString.call(this)?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if(!isFunction(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1});var reduceCoercesToObject=!1;Array.prototype.reduce&&(reduceCoercesToObject="object"==typeof Array.prototype.reduce.call("es5",function(_,__,___,list){return list})),Array.prototype.reduce&&reduceCoercesToObject||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&"[object String]"===_toString.call(this)?this.split(""):object,length=self.length>>>0;if(!isFunction(fun))throw new TypeError(fun+" is not a function");if(!length&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError("reduce of empty array with no initial value")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result});var reduceRightCoercesToObject=!1;Array.prototype.reduceRight&&(reduceRightCoercesToObject="object"==typeof Array.prototype.reduceRight.call("es5",function(_,__,___,list){return list})),Array.prototype.reduceRight&&reduceRightCoercesToObject||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&"[object String]"===_toString.call(this)?this.split(""):object,length=self.length>>>0;if(!isFunction(fun))throw new TypeError(fun+" is not a function");if(!length&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(--i<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>i)return result;do i in self&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1===[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&"[object String]"===_toString.call(this)?this.split(""):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1===[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&"[object String]"===_toString.call(this)?this.split(""):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1});var keysWorksWithArguments=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2);if(Object.keys){if(!keysWorksWithArguments){var originalKeys=Object.keys;Object.keys=function(object){return originalKeys(isArguments(object)?Array.prototype.slice.call(object):object)}}}else{var hasDontEnumBug=!{toString:null}.propertyIsEnumerable("toString"),hasProtoEnumBug=function(){}.propertyIsEnumerable("prototype"),dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;Object.keys=function(object){var isFn=isFunction(object),isArgs=isArguments(object),isObject=null!==object&&"object"==typeof object,isString=isObject&&"[object String]"===_toString.call(object);if(!isObject&&!isFn&&!isArgs)throw new TypeError("Object.keys called on a non-object");var theKeys=[],skipProto=hasProtoEnumBug&&isFn;if(isString||isArgs)for(var i=0;i<object.length;++i)theKeys.push(String(i));else for(var name in object)skipProto&&"prototype"===name||!owns(object,name)||theKeys.push(String(name));if(hasDontEnumBug)for(var ctor=object.constructor,skipConstructor=ctor&&ctor.prototype===object,j=0;dontEnumsLength>j;j++){var dontEnum=dontEnums[j];skipConstructor&&"constructor"===dontEnum||!owns(object,dontEnum)||theKeys.push(dontEnum)}return theKeys}}var negativeDate=-621987552e5,negativeYearString="-000001";Date.prototype.toISOString&&-1!==new Date(negativeDate).toISOString().indexOf(negativeYearString)||(Date.prototype.toISOString=function(){var result,length,value,year,month;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(year=this.getUTCFullYear(),month=this.getUTCMonth(),year+=Math.floor(month/12),month=(month%12+12)%12,result=[month+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],year=(0>year?"-":year>9999?"+":"")+("00000"+Math.abs(year)).slice(year>=0&&9999>=year?-4:-6),length=result.length;length--;)value=result[length],10>value&&(result[length]="0"+value);return year+"-"+result.slice(0,2).join("-")+"T"+result.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"});var dateToJSONIsSupported=!1;try{dateToJSONIsSupported=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(negativeDate).toJSON().indexOf(negativeYearString)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(e){}dateToJSONIsSupported||(Date.prototype.toJSON=function(){var toISO,o=Object(this),tv=toPrimitive(o);if("number"==typeof tv&&!isFinite(tv))return null;if(toISO=o.toISOString,"function"!=typeof toISO)throw new TypeError("toISOString property is not callable");return toISO.call(o)});var supportsExtendedYears=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),acceptsInvalidDates=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")),doesNotParseY2KNewYear=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(!Date.parse||doesNotParseY2KNewYear||acceptsInvalidDates||!supportsExtendedYears)&&(Date=function(NativeDate){function Date(Y,M,D,h,m,s,ms){var length=arguments.length;if(this instanceof NativeDate){var date=1===length&&String(Y)===Y?new NativeDate(Date.parse(Y)):length>=7?new NativeDate(Y,M,D,h,m,s,ms):length>=6?new NativeDate(Y,M,D,h,m,s):length>=5?new NativeDate(Y,M,D,h,m):length>=4?new NativeDate(Y,M,D,h):length>=3?new NativeDate(Y,M,D):length>=2?new NativeDate(Y,M):length>=1?new NativeDate(Y):new NativeDate;return date.constructor=Date,date}return NativeDate.apply(this,arguments)}function dayFromMonth(year,month){var t=month>1?1:0;return months[month]+Math.floor((year-1969+t)/4)-Math.floor((year-1901+t)/100)+Math.floor((year-1601+t)/400)+365*(year-1970)}function toUTC(t){return Number(new NativeDate(1970,0,1,0,0,0,t))}var isoDateExpression=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),months=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var key in NativeDate)Date[key]=NativeDate[key];return Date.now=NativeDate.now,Date.UTC=NativeDate.UTC,Date.prototype=NativeDate.prototype,Date.prototype.constructor=Date,Date.parse=function(string){var match=isoDateExpression.exec(string);if(match){var result,year=Number(match[1]),month=Number(match[2]||1)-1,day=Number(match[3]||1)-1,hour=Number(match[4]||0),minute=Number(match[5]||0),second=Number(match[6]||0),millisecond=Math.floor(1e3*Number(match[7]||0)),isLocalTime=Boolean(match[4]&&!match[8]),signOffset="-"===match[9]?1:-1,hourOffset=Number(match[10]||0),minuteOffset=Number(match[11]||0);return(minute>0||second>0||millisecond>0?24:25)>hour&&60>minute&&60>second&&1e3>millisecond&&month>-1&&12>month&&24>hourOffset&&60>minuteOffset&&day>-1&&day<dayFromMonth(year,month+1)-dayFromMonth(year,month)&&(result=60*(24*(dayFromMonth(year,month)+day)+hour+hourOffset*signOffset),result=1e3*(60*(result+minute+minuteOffset*signOffset)+second)+millisecond,isLocalTime&&(result=toUTC(result)),result>=-864e13&&864e13>=result)?result:0/0}return NativeDate.parse.apply(this,arguments)},Date}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()}),Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===0xde0b6b3a7640080.toFixed(0)||!function(){function multiply(n,c){for(var i=-1;++i<size;)c+=n*data[i],data[i]=c%base,c=Math.floor(c/base)}function divide(n){for(var i=size,c=0;--i>=0;)c+=data[i],data[i]=Math.floor(c/n),c=c%n*base}function numToString(){for(var i=size,s="";--i>=0;)if(""!==s||0===i||0!==data[i]){var t=String(data[i]);""===s?s=t:s+="0000000".slice(0,7-t.length)+t}return s}function pow(x,n,acc){return 0===n?acc:n%2===1?pow(x,n-1,acc*x):pow(x*x,n/2,acc)}function log(x){for(var n=0;x>=4096;)n+=12,x/=4096;for(;x>=2;)n+=1,x/=2;return n}var base,size,data;base=1e7,size=6,data=[0,0,0,0,0,0],Number.prototype.toFixed=function(fractionDigits){var f,x,s,m,e,z,j,k;if(f=Number(fractionDigits),f=f!==f?0:Math.floor(f),0>f||f>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(x=Number(this),x!==x)return"NaN";if(-1e21>=x||x>=1e21)return String(x);if(s="",0>x&&(s="-",x=-x),m="0",x>1e-21)if(e=log(x*pow(2,69,1))-69,z=0>e?x*pow(2,-e,1):x/pow(2,e,1),z*=4503599627370496,e=52-e,e>0){for(multiply(0,z),j=f;j>=7;)multiply(1e7,0),j-=7;for(multiply(pow(10,j,1),0),j=e-1;j>=23;)divide(1<<23),j-=23;divide(1<<j),multiply(1,1),divide(2),m=numToString()}else multiply(0,z),multiply(1<<-e,0),m=numToString()+"0.00000000000000000000".slice(2,2+f);return f>0?(k=m.length,m=f>=k?s+"0.0000000000000000000".slice(0,f-k+2)+m:s+m.slice(0,k-f)+"."+m.slice(k-f)):m=s+m,m}}();var string_split=String.prototype.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var compliantExecNpcg=void 0===/()??/.exec("")[1];String.prototype.split=function(separator,limit){var string=this;if(void 0===separator&&0===limit)return[];if("[object RegExp]"!==_toString.call(separator))return string_split.call(this,separator,limit);var separator2,match,lastIndex,lastLength,output=[],flags=(separator.ignoreCase?"i":"")+(separator.multiline?"m":"")+(separator.extended?"x":"")+(separator.sticky?"y":""),lastLastIndex=0;for(separator=new RegExp(separator.source,flags+"g"),string+="",compliantExecNpcg||(separator2=new RegExp("^"+separator.source+"$(?!\\s)",flags)),limit=void 0===limit?-1>>>0:ToUint32(limit);(match=separator.exec(string))&&(lastIndex=match.index+match[0].length,!(lastIndex>lastLastIndex&&(output.push(string.slice(lastLastIndex,match.index)),!compliantExecNpcg&&match.length>1&&match[0].replace(separator2,function(){for(var i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(match[i]=void 0)}),match.length>1&&match.index<string.length&&Array.prototype.push.apply(output,match.slice(1)),lastLength=match[0].length,lastLastIndex=lastIndex,output.length>=limit)));)separator.lastIndex===match.index&&separator.lastIndex++;return lastLastIndex===string.length?(lastLength||!separator.test(""))&&output.push(""):output.push(string.slice(lastLastIndex)),output.length>limit?output.slice(0,limit):output}}():"0".split(void 0,0).length&&(String.prototype.split=function(separator,limit){return void 0===separator&&0===limit?[]:string_split.call(this,separator,limit)});var str_replace=String.prototype.replace,replaceReportsGroupsCorrectly=function(){var groups=[];return"x".replace(/x(.)?/g,function(match,group){groups.push(group)}),1===groups.length&&"undefined"==typeof groups[0]}();if(replaceReportsGroupsCorrectly||(String.prototype.replace=function(searchValue,replaceValue){var isFn=isFunction(replaceValue),hasCapturingGroups=isRegex(searchValue)&&/\)[*?]/.test(searchValue.source);if(isFn&&hasCapturingGroups){var wrappedReplaceValue=function(match){var length=arguments.length,originalLastIndex=searchValue.lastIndex;searchValue.lastIndex=0;var args=searchValue.exec(match);return searchValue.lastIndex=originalLastIndex,args.push(arguments[length-2],arguments[length-1]),replaceValue.apply(this,args)};return str_replace.call(this,searchValue,wrappedReplaceValue)}return str_replace.call(this,searchValue,replaceValue)}),"".substr&&"b"!=="0b".substr(-1)){var string_substr=String.prototype.substr;String.prototype.substr=function(start,length){return string_substr.call(this,0>start&&(start=this.length+start)<0?0:start,length)}}var ws="	\n\f\r   ᠎             　\u2028\u2029",zeroWidth="​";if(!String.prototype.trim||ws.trim()||!zeroWidth.trim()){ws="["+ws+"]";var trimBeginRegexp=new RegExp("^"+ws+ws+"*"),trimEndRegexp=new RegExp(ws+ws+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(trimBeginRegexp,"").replace(trimEndRegexp,"")}}(8!==parseInt(ws+"08")||22!==parseInt(ws+"0x16"))&&(parseInt=function(origParseInt){var hexRegex=/^0[xX]/;return function(str,radix){return str=String(str).trim(),Number(radix)||(radix=hexRegex.test(str)?16:10),origParseInt(str,radix)}}(parseInt));var toObject=function(o){if(null==o)throw new TypeError("can't convert "+o+" to object");return Object(o)},ToUint32=function(x){return x>>>0}}),function(){function N(p,r){function q(a){if(q[a]!==w)return q[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=q("json-stringify")&&q("json-parse");else{var e;if("json-stringify"==a){c=r.stringify;var b="function"==typeof c&&s;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new t)&&'""'==c(new A)&&c(u)===w&&c(w)===w&&c()===w&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([w])&&"null"==c(null)&&"[null,null,null]"==c([w,u,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==c({a:[e,!0,!1,null,"\x00\b\n\f\r	"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new C(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new C(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new C(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new C(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){if(c=r.parse,"function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var n=5==e.a.length&&1===e.a[0];if(n){try{n=!c('"	"')}catch(d){}if(n)try{n=1!==c("01")}catch(g){}if(n)try{n=1!==c("1.")}catch(m){}}}}catch(X){n=!1}c=n}}return q[a]=!!c}p||(p=k.Object()),r||(r=k.Object());var t=p.Number||k.Number,A=p.String||k.String,H=p.Object||k.Object,C=p.Date||k.Date,G=p.SyntaxError||k.SyntaxError,K=p.TypeError||k.TypeError,L=p.Math||k.Math,I=p.JSON||k.JSON;"object"==typeof I&&I&&(r.stringify=I.stringify,r.parse=I.parse);var v,B,w,H=H.prototype,u=H.toString,s=new C(-0xc782b5b800cec);try{s=-109252==s.getUTCFullYear()&&0===s.getUTCMonth()&&1===s.getUTCDate()&&10==s.getUTCHours()&&37==s.getUTCMinutes()&&6==s.getUTCSeconds()&&708==s.getUTCMilliseconds()}catch(Q){}if(!q("json")){var D=q("bug-string-char-index");if(!s)var x=L.floor,M=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,c){return M[c]+365*(a-1970)+x((a-1969+(c=+(c>1)))/4)-x((a-1901+c)/100)+x((a-1601+c)/400)};if((v=H.hasOwnProperty)||(v=function(a){var e,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=u?v=function(a){var c=this.__proto__;return a=a in(this.__proto__=null,this),this.__proto__=c,a}:(e=c.constructor,v=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,v.call(this,a)}),B=function(a,c){var b,f,n,e=0;(b=function(){this.valueOf=0}).prototype.valueOf=0,f=new b;for(n in f)v.call(f,n)&&e++;return b=f=null,e?B=2==e?function(a,c){var f,e={},b="[object Function]"==u.call(a);for(f in a)b&&"prototype"==f||v.call(e,f)||!(e[f]=1)||!v.call(a,f)||c(f)}:function(a,c){var b,f,e="[object Function]"==u.call(a);for(b in a)e&&"prototype"==b||!v.call(a,b)||(f="constructor"===b)||c(b);(f||v.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),B=function(a,c){var b,e="[object Function]"==u.call(a),h=!e&&"function"!=typeof a.constructor&&F[typeof a.hasOwnProperty]&&a.hasOwnProperty||v;for(b in a)e&&"prototype"==b||!h.call(a,b)||c(b);for(e=f.length;b=f[--e];h.call(a,b)&&c(b));}),B(a,c)},!q("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},y=function(a,c){return("000000"+(c||0)).slice(-a)},R=function(a){for(var c='"',b=0,h=a.length,f=!D||h>10,n=f&&(D?a.split(""):a);h>b;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+y(2,d.toString(16));break}c+=f?n[b]:a.charAt(b)}}return c+'"'},O=function(a,c,b,h,f,n,d){var g,m,k,l,p,r,s,t,q;try{g=c[a]}catch(z){}if("object"==typeof g&&g)if(m=u.call(g),"[object Date]"!=m||v.call(g,"toJSON"))"function"==typeof g.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||v.call(g,"toJSON"))&&(g=g.toJSON(a));else if(g>-1/0&&1/0>g){if(E){for(l=x(g/864e5),m=x(l/365.2425)+1970-1;E(m+1,0)<=l;m++);for(k=x((l-E(m,0))/30.42);E(m,k+1)<=l;k++);l=1+l-E(m,k),p=(g%864e5+864e5)%864e5,r=x(p/36e5)%24,s=x(p/6e4)%60,t=x(p/1e3)%60,p%=1e3}else m=g.getUTCFullYear(),k=g.getUTCMonth(),l=g.getUTCDate(),r=g.getUTCHours(),s=g.getUTCMinutes(),t=g.getUTCSeconds(),p=g.getUTCMilliseconds();g=(0>=m||m>=1e4?(0>m?"-":"+")+y(6,0>m?-m:m):y(4,m))+"-"+y(2,k+1)+"-"+y(2,l)+"T"+y(2,r)+":"+y(2,s)+":"+y(2,t)+"."+y(3,p)+"Z"}else g=null;if(b&&(g=b.call(c,a,g)),null===g)return"null";if(m=u.call(g),"[object Boolean]"==m)return""+g;if("[object Number]"==m)return g>-1/0&&1/0>g?""+g:"null";if("[object String]"==m)return R(""+g);if("object"==typeof g){for(a=d.length;a--;)if(d[a]===g)throw K();if(d.push(g),q=[],c=n,n+=f,"[object Array]"==m){for(k=0,a=g.length;a>k;k++)m=O(k,g,b,h,f,n,d),q.push(m===w?"null":m);a=q.length?f?"[\n"+n+q.join(",\n"+n)+"\n"+c+"]":"["+q.join(",")+"]":"[]"}else B(h||g,function(a){var c=O(a,g,b,h,f,n,d);c!==w&&q.push(R(a)+":"+(f?" ":"")+c)}),a=q.length?f?"{\n"+n+q.join(",\n"+n)+"\n"+c+"}":"{"+q.join(",")+"}":"{}";return d.pop(),a}};r.stringify=function(a,c,b){var h,f,n,d;if(F[typeof c]&&c)if("[object Function]"==(d=u.call(c)))f=c;else if("[object Array]"==d){n={};for(var l,g=0,k=c.length;k>g;l=c[g++],d=u.call(l),("[object String]"==d||"[object Number]"==d)&&(n[l]=1));}if(b)if("[object Number]"==(d=u.call(b))){if(0<(b-=b%1))for(h="",b>10&&(b=10);h.length<b;h+=" ");}else"[object String]"==d&&(h=10>=b.length?b:b.slice(0,10));return O("",(l={},l[""]=a,l),f,n,h,"",[])}}if(!q("json-parse")){var b,J,V=A.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},l=function(){throw b=J=null,G()},z=function(){for(var e,h,f,k,d,a=J,c=a.length;c>b;)switch(d=a.charCodeAt(b)){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=D?a.charAt(b):a[b],b++,e;case 34:for(e="@",b++;c>b;)if(d=a.charCodeAt(b),32>d)l();else if(92==d)switch(d=a.charCodeAt(++b)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d],b++;break;case 117:for(h=++b,f=b+4;f>b;b++)d=a.charCodeAt(b),d>=48&&57>=d||d>=97&&102>=d||d>=65&&70>=d||l();e+=V("0x"+a.slice(h,b));break;default:l()}else{if(34==d)break;for(d=a.charCodeAt(b),h=b;d>=32&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(h,b)}if(34==a.charCodeAt(b))return b++,e;l();default:if(h=b,45==d&&(k=!0,d=a.charCodeAt(++b)),d>=48&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),d>=48&&57>=d)&&l();c>b&&(d=a.charCodeAt(b),d>=48&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;c>f&&(d=a.charCodeAt(f),d>=48&&57>=d);f++);f==b&&l(),b=f}if(d=a.charCodeAt(b),101==d||69==d){for(d=a.charCodeAt(++b),43!=d&&45!=d||b++,f=b;c>f&&(d=a.charCodeAt(f),d>=48&&57>=d);f++);f==b&&l(),b=f}return+a.slice(h,b)}if(k&&l(),"true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,b+4))return b+=4,null;l()}return"$"},P=function(a){var c,b;if("$"==a&&l(),"string"==typeof a){if("@"==(D?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];a=z(),"]"!=a;b||(b=!0))b&&(","==a?(a=z(),"]"==a&&l()):l()),","==a&&l(),c.push(P(a));return c}if("{"==a){for(c={};a=z(),"}"!=a;b||(b=!0))b&&(","==a?(a=z(),"}"==a&&l()):l()),","!=a&&"string"==typeof a&&"@"==(D?a.charAt(0):a[0])&&":"==z()||l(),c[a.slice(1)]=P(z());return c}l()}return a},T=function(a,b,e){e=S(a,b,e),e===w?delete a[b]:a[b]=e},S=function(a,b,e){var f,h=a[b];if("object"==typeof h&&h)if("[object Array]"==u.call(h))for(f=h.length;f--;)T(h,f,e);else B(h,function(a){T(h,a,e)});return e.call(a,b,h)};r.parse=function(a,c){var e,h;return b=0,J=""+a,e=P(z()),"$"!=z()&&l(),b=J=null,c&&"[object Function]"==u.call(c)?S((h={},h[""]=e,h),"",c):e}}}return r.runInContext=N,r}var K="function"==typeof define&&define.amd,F={"function":!0,object:!0},G=F[typeof exports]&&exports&&!exports.nodeType&&exports,k=F[typeof window]&&window||this,t=G&&F[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!t||t.global!==t&&t.window!==t&&t.self!==t||(k=t),G&&!K)N(k,G);else{var L=k.JSON,Q=k.JSON3,M=!1,A=N(k,k.JSON3={noConflict:function(){return M||(M=!0,k.JSON=L,k.JSON3=Q,L=Q=null),A}});k.JSON={parse:A.parse,stringify:A.stringify}}K&&define(function(){return A})}.call(this),function(w){"use strict";function callMedia(){applyMedia(!0)}var respond={};w.respond=respond,respond.update=function(){};var requestQueue=[],xmlHttp=function(){var xmlhttpmethod=!1;try{xmlhttpmethod=new w.XMLHttpRequest}catch(e){xmlhttpmethod=new w.ActiveXObject("Microsoft.XMLHTTP")}return function(){return xmlhttpmethod}}(),ajax=function(url,callback){var req=xmlHttp();req&&(req.open("GET",url,!0),req.onreadystatechange=function(){4!==req.readyState||200!==req.status&&304!==req.status||callback(req.responseText)},4!==req.readyState&&req.send(null))};if(respond.ajax=ajax,respond.queue=requestQueue,respond.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},respond.mediaQueriesSupported=w.matchMedia&&null!==w.matchMedia("only all")&&w.matchMedia("only all").matches,!respond.mediaQueriesSupported){var lastCall,resizeDefer,eminpx,doc=w.document,docElem=doc.documentElement,mediastyles=[],rules=[],appendedEls=[],parsedSheets={},resizeThrottle=30,head=doc.getElementsByTagName("head")[0]||docElem,base=doc.getElementsByTagName("base")[0],links=head.getElementsByTagName("link"),getEmValue=function(){var ret,div=doc.createElement("div"),body=doc.body,originalHTMLFontSize=docElem.style.fontSize,originalBodyFontSize=body&&body.style.fontSize,fakeUsed=!1;return div.style.cssText="position:absolute;font-size:1em;width:1em",body||(body=fakeUsed=doc.createElement("body"),body.style.background="none"),docElem.style.fontSize="100%",body.style.fontSize="100%",body.appendChild(div),fakeUsed&&docElem.insertBefore(body,docElem.firstChild),ret=div.offsetWidth,fakeUsed?docElem.removeChild(body):body.removeChild(div),docElem.style.fontSize=originalHTMLFontSize,originalBodyFontSize&&(body.style.fontSize=originalBodyFontSize),ret=eminpx=parseFloat(ret)},applyMedia=function(fromResize){var name="clientWidth",docElemProp=docElem[name],currWidth="CSS1Compat"===doc.compatMode&&docElemProp||doc.body[name]||docElemProp,styleBlocks={},lastLink=links[links.length-1],now=(new Date).getTime();if(fromResize&&lastCall&&resizeThrottle>now-lastCall)return w.clearTimeout(resizeDefer),void(resizeDefer=w.setTimeout(applyMedia,resizeThrottle));lastCall=now;for(var i in mediastyles)if(mediastyles.hasOwnProperty(i)){var thisstyle=mediastyles[i],min=thisstyle.minw,max=thisstyle.maxw,minnull=null===min,maxnull=null===max,em="em";min&&(min=parseFloat(min)*(min.indexOf(em)>-1?eminpx||getEmValue():1)),max&&(max=parseFloat(max)*(max.indexOf(em)>-1?eminpx||getEmValue():1)),thisstyle.hasquery&&(minnull&&maxnull||!(minnull||currWidth>=min)||!(maxnull||max>=currWidth))||(styleBlocks[thisstyle.media]||(styleBlocks[thisstyle.media]=[]),styleBlocks[thisstyle.media].push(rules[thisstyle.rules]))}for(var j in appendedEls)appendedEls.hasOwnProperty(j)&&appendedEls[j]&&appendedEls[j].parentNode===head&&head.removeChild(appendedEls[j]);appendedEls.length=0;for(var k in styleBlocks)if(styleBlocks.hasOwnProperty(k)){var ss=doc.createElement("style"),css=styleBlocks[k].join("\n");ss.type="text/css",ss.media=k,head.insertBefore(ss,lastLink.nextSibling),ss.styleSheet?ss.styleSheet.cssText=css:ss.appendChild(doc.createTextNode(css)),appendedEls.push(ss)}},translate=function(styles,href,media){var qs=styles.replace(respond.regex.keyframes,"").match(respond.regex.media),ql=qs&&qs.length||0;href=href.substring(0,href.lastIndexOf("/"));var repUrls=function(css){return css.replace(respond.regex.urls,"$1"+href+"$2$3")},useMedia=!ql&&media;href.length&&(href+="/"),useMedia&&(ql=1);for(var i=0;ql>i;i++){var fullq,thisq,eachq,eql;useMedia?(fullq=media,rules.push(repUrls(styles))):(fullq=qs[i].match(respond.regex.findStyles)&&RegExp.$1,rules.push(RegExp.$2&&repUrls(RegExp.$2))),eachq=fullq.split(","),eql=eachq.length;for(var j=0;eql>j;j++)thisq=eachq[j],mediastyles.push({media:thisq.split("(")[0].match(respond.regex.only)&&RegExp.$2||"all",rules:rules.length-1,hasquery:thisq.indexOf("(")>-1,minw:thisq.match(respond.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:thisq.match(respond.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}applyMedia()},makeRequests=function(){if(requestQueue.length){var thisRequest=requestQueue.shift();ajax(thisRequest.href,function(styles){translate(styles,thisRequest.href,thisRequest.media),parsedSheets[thisRequest.href]=!0,w.setTimeout(function(){makeRequests()},0)})}},ripCSS=function(){for(var i=0;i<links.length;i++){var sheet=links[i],href=sheet.href,media=sheet.media,isCSS=sheet.rel&&"stylesheet"===sheet.rel.toLowerCase();href&&isCSS&&!parsedSheets[href]&&(sheet.styleSheet&&sheet.styleSheet.rawCssText?(translate(sheet.styleSheet.rawCssText,href,media),parsedSheets[href]=!0):(!/^([a-zA-Z:]*\/\/)/.test(href)&&!base||href.replace(RegExp.$1,"").split("/")[0]===w.location.host)&&("//"===href.substring(0,2)&&(href=w.location.protocol+href),requestQueue.push({href:href,media:media})))
}makeRequests()};ripCSS(),respond.update=ripCSS,respond.getEmValue=getEmValue,w.addEventListener?w.addEventListener("resize",callMedia,!1):w.attachEvent&&w.attachEvent("onresize",callMedia)}}(this);