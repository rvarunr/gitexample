'use strict';
define(
		[ 'angular', '../require/route-config' ],
		function(angular, routeConfig, lazyDirectives) {
			return angular
					.module(
							'myApp',
							[ 'lndService', 'ui.bootstrap', '$strap.directives' ],
							[
									'$compileProvider',
									'$controllerProvider',
									function($compileProvider,
											$controllerProvider) {
										routeConfig
												.setCompileProvider($compileProvider);
										routeConfig
												.setControllerProvider($controllerProvider);
									} ])
									
  .factory('ecertDataFactory', [ function() {
						var data = {
                            isEcert:false
						};
						return {
							getProperty : function() {
							
								return data;
							},
							setProperty : function(isEcert,courseId,ecertId,programTypeName,courseName) {
								
								data.isEcert = isEcert;
								data.courseId = courseId;
								data.ecertId = ecertId;
								data.programTypeName = programTypeName;
								data.courseName=courseName;
							
							}							
						};
					  } ])
					.service('DataStruct', function() {

						var member = function(elt, set, func) {
							var comp = func || angular.equals;
							
							if (typeof set === "object" && set.length) {
								for ( var i = 0; i < set.length; i += 1) {
									
									if (comp(elt, set[i])) {
										return i;
									}
								}
							}
							return false;
						}, add = function(elt, set, func) {
							if (member(elt, set) === false) {
								set.unshift(elt);
							}
						}, eql = function() {
							shell = function(s1, s2) {
								var e = s1[0], i, p;
								if ((i = member(e, s2)) !== false) {
									p = angular.equals(e, s2[i]);
									s1.splice(0, 1);
									s2.splice(i, 1);

									return p && shell(s1, s2);
								}

								return false;
							};
							return shell;
						};

						this.Set = {};
						this.Set.member = member;
						this.Set.add = add;
						this.Set.eql = eql();
					})
					.service(
							'httpService',
							function($rootScope) {
								this.httpGetMethod = function(url, jsonData,
										$http, cacheValue, hideAjaxModal) {
									
									// For Tracking Session Time Out
									if($rootScope.prevReqTime==0 && $rootScope.crntReqTime==0)
	                                   {
											var d = new Date();
											var n = d.getTime(); // in milliseconds
											$rootScope.crntReqTime=n;
	                                   }
										else
											{
											$rootScope.prevReqTime= $rootScope.crntReqTime;
											var d = new Date();
											var n = d.getTime(); // in milliseconds
											$rootScope.crntReqTime=n;
											}
									if($rootScope.prevReqTime!=0)
										{
										//console.log("$rootScope.prevReqTime::"+$rootScope.prevReqTime);
										//console.log("$rootScope.crntReqTime::"+$rootScope.crntReqTime);
										
										var secondsP = Math.floor($rootScope.prevReqTime / 1000);
										//console.log("secondsP:::"+secondsP);
										var minutesP = Math.floor(secondsP / 60);
										//console.log("minutesP:::"+minutesP);
										
										var secondsC = Math.floor($rootScope.crntReqTime / 1000);
										//console.log("secondsC:::"+secondsC);
										var minutesC = Math.floor(secondsC / 60);
										//console.log("minutesC:::"+minutesC);
										
										var _minElapsed=minutesC-minutesP;
										//console.log("_minElapsed:::"+_minElapsed);
										if(_minElapsed>10)
											{
											location.href = "/iEvolve/pages/sessionExpired.html";
											return false;
											/*var r=confirm("Your application session has timed out. You may be redirected to the application home page. Please click OK to proceed.");
											if (r==true)  {	
												location.href = "index.html?cd="+ (new Date()).getTime();
											  }
											else {
												location.href = "/iEvolve/pages/sessionExpired.html";
												return false;
												}*/
											}
										}
									
									
									var paramData = {};
                                    url = url + "/?cd="+(new Date()).getTime();
									angular.copy(jsonData, paramData);

									/*
									 * for (var prop in paramData) {
									 * 
									 * paramData[prop] =
									 * encodeURIComponent(paramData[prop]); }
									 */

									if (arguments.length == parseInt(4)) {
										$("#loadingModal").modal('show');
										_idleSecondsCounter = 0;
										countTimeout=0;
									}
									return $http({
										url : encodeURI(url),										
										method : 'get',
										params : paramData,
										cache : cacheValue
									});
								};
								this.httpPostMethod = function(url, jsonData,
										$http) {
									// For Tracking Session Time Out
									if($rootScope.prevReqTime==0 && $rootScope.crntReqTime==0)
	                                   {
											var d = new Date();
											var n = d.getTime(); // in milliseconds
											$rootScope.crntReqTime=n;
	                                   }
										else
											{
											$rootScope.prevReqTime= $rootScope.crntReqTime;
											var d = new Date();
											var n = d.getTime(); // in milliseconds
											$rootScope.crntReqTime=n;
											}
									if($rootScope.prevReqTime!=0)
										{
										//console.log("$rootScope.prevReqTime::"+$rootScope.prevReqTime);
										//console.log("$rootScope.crntReqTime::"+$rootScope.crntReqTime);
										
										var secondsP = Math.floor($rootScope.prevReqTime / 1000);
									//	console.log("secondsP:::"+secondsP);
										var minutesP = Math.floor(secondsP / 60);
									//	console.log("minutesP:::"+minutesP);
										
										var secondsC = Math.floor($rootScope.crntReqTime / 1000);
									//	console.log("secondsC:::"+secondsC);
										var minutesC = Math.floor(secondsC / 60);
									//	console.log("minutesC:::"+minutesC);
										
										var _minElapsed=minutesC-minutesP;
									//	console.log("_minElapsed:::"+_minElapsed);
										if(_minElapsed>10)
											{
											location.href = "/iEvolve/pages/sessionExpired.html";
											return false;
											/*var r=confirm("Your application session has timed out. You may be redirected to the application home page. Please click OK to proceed.");
											if (r==true)  {	
												location.href = "index.html?cd="+ (new Date()).getTime();
											  }
											else {
												location.href = "/iEvolve/pages/sessionExpired.html";
												return false;
												}*/
											}
										}
									
									
									
									
									$("#loadingModal").modal('show');
									url = url + "/?cd="+(new Date()).getTime();
									_idleSecondsCounter=0;
									countTimeout=0;
									return $http({
										url : encodeURI(url),
										method : 'post',
										data : jsonData
									});
								};

								
								

								var isLoggedIn=false;
								if ($rootScope.userEmpId != null)
								{
									isLoggedIn=true;
								}

								if(isLoggedIn){
									CheckIdleTime();
								}

								var IDLE_TIMEOUT = 8*60; //seconds
								var _idleSecondsCounter = 0;
								var countTimeout = 0;
								var currentdate = new Date();
								var hr=currentdate.getHours();
								var h='AM';
								var m=currentdate.getMinutes();
								m=m/60;
								if((hr+m)>(12))
								{
									if(hr>12)
										hr=hr-12;
									h='PM';
								} 
								hr=hr+'';
								if(hr.length<2)
								{
									hr='0'+hr;
								}
								var mm=currentdate.getMinutes()+'';
								var ss=currentdate.getSeconds()+'';
								if(mm.length<2)
								{
									mm='0'+mm;
								}
								if(ss.length<2)
								{
									ss='0'+ss;
								}
								//var datetime = hr + ":" + mm + ":" + ss+" "+h;

								window.setInterval(CheckIdleTime, 1000);

								function CheckIdleTime() {
								    _idleSecondsCounter++;


								    if (_idleSecondsCounter > IDLE_TIMEOUT && countTimeout!=1) 
								    {    	
								    	//alert("Message From iEvolve Application::\nYou have been inactive since last 8 minutes. Please save your work in next 2 minutes to avoid any data loss due to session time-out. You may continue with Content/Assessment in a separate window. Your score will rollback even if this session is inactive. ");
								    	countTimeout=1;
								    	_idleSecondsCounter=0;
								    }
								}   
								
							})
                
					.filter(
							'getEmployeeArray',
							function() {
								return function(input, searchValue) {
									var out = new Array();
									for ( var i = 0; i < input.length; i++) {
										if (input[i].empId.substring(0,
												searchValue.length) == searchValue) {
											input[i].empIdWithName = input[i].empId
													+ ' / '
													+ input[i].empFirstName
													+ ' '
													+ input[i].empLastName;
											input[i].empName = input[i].empFirstName
													+ ' '
													+ input[i].empLastName;
											out.push(input[i]);
										}
									}
									return out;
								};
							})
					.filter('offset', function() {
						return function(input, start) {
							start = parseInt(start, 10);
							return input.slice(start);
						};
					})
						.filter('dateFormatFilterWRTFormat', function() {
						return function(dateWithInvalidFormat) {
							

							  var dates =  {
								        en: {
								            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
								            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
								            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
								            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
								            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
								            today: "Today"
								        }
								    };
							  var iltLrObject = {};
							  var date1='';						  
							  var DPGlobal = {
								        modes: [{
								            clsName: "days",
								            navFnc: "Month",
								            navStep: 1
								        }, {
								            clsName: "months",
								            navFnc: "FullYear",
								            navStep: 1
								        }, {
								            clsName: "years",
								            navFnc: "FullYear",
								            navStep: 10
								        }],
								        isLeapYear: function(year) {
								            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
								        },
								        getDaysInMonth: function(year, month) {
								            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
								        },
								        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
								        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
								        parseFormat: function(format) {
								            var separators = format.replace(this.validParts, "\0").split("\0"),
								                parts = format.match(this.validParts);
								            if (!separators || !separators.length || !parts || parts.length === 0) {
								                throw new Error("Invalid date format.")
								            }
								            return {
								                separators: separators,
								                parts: parts
								            }
								        },
								    	isValidDate:function (currVal)
								    	{
								    		
								    	    if (currVal == '') return false;

								    	    //Declare Regex  
								    	    var rxDatePattern = /^(\d{1,2})(\/|-)([a-zA-Z]{3})(\/|-)(\d{4})$/;
								    	    //var rxDatePattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})[+-.](\d{3})Z/;

								    	    var dtArray = String(currVal).match(rxDatePattern); // is format OK?
								    	  
								    	    if (dtArray == null) return false;
								    
								    	    var dtDay = parseInt(dtArray[1]);
								    	    var dtMonth = dtArray[3];
								    	    var dtYear = parseInt(dtArray[5]);

								    	    // need to change to lowerCase because switch is
								    	    // case sensitive
								    	    switch (dtMonth.toLowerCase()) {
								    	        case 'jan':
								    	            dtMonth = '01';
								    	            break;
								    	        case 'feb':
								    	            dtMonth = '02';
								    	            break;
								    	        case 'mar':
								    	            dtMonth = '03';
								    	            break;
								    	        case 'apr':
								    	            dtMonth = '04';
								    	            break;
								    	        case 'may':
								    	            dtMonth = '05';
								    	            break;
								    	        case 'jun':
								    	            dtMonth = '06';
								    	            break;
								    	        case 'jul':
								    	            dtMonth = '07';
								    	            break;
								    	        case 'aug':
								    	            dtMonth = '08';
								    	            break;
								    	        case 'sep':
								    	            dtMonth = '09';
								    	            break;
								    	        case 'oct':
								    	            dtMonth = '10';
								    	            break;
								    	        case 'nov':
								    	            dtMonth = '11';
								    	            break;
								    	        case 'dec':
								    	            dtMonth = '12';
								    	            break;
								    	        default : break;
								    	    }

								    	    // convert date to number
								    	    dtMonth = parseInt(dtMonth);
								    /*console.log(dtMonth);
								    console.log(dtDay);
								    console.log(dtYear);
								    console.log(dtYear % 4 == 0 );
								    console.log(dtYear % 100 != 0);
								    console.log(dtYear % 400 == 0);
								    console.log(dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));*/
								    	    if (isNaN(dtMonth)) return false;
								    	    else if (dtMonth < 1 || dtMonth > 12) return false;
								    	    else if (dtDay < 1 || dtDay > 31) return false;
								    	    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31) return false;
								    	    else if (dtMonth == 2) {
								    	        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
								    	        if (dtDay > 29 || (dtDay == 29 && !isleap)) 
								    	        	return false;
								    	    }

								    	    return true;
								    	    
								    	},
								        parseDate: function(date, format, language) {
								        	
								            if (date instanceof Date) {
								            
								                return date
								            }
								            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
								                var part_re = /([\-+]\d+)([dmwy])/,
								                    parts = date.match(/([\-+]\d+)([dmwy])/g),
								                    part, dir;
								                date = new Date();
								                for (var i = 0; i < parts.length; i++) {
								                    part = part_re.exec(parts[i]);
								                    dir = parseInt(part[1]);
								                    switch (part[2]) {
								                        case "d":
								                            date.setUTCDate(date.getUTCDate() + dir);
								                            break;
								                        case "m":
								                            date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
								                            break;
								                        case "w":
								                            date.setUTCDate(date.getUTCDate() + dir * 7);
								                            break;
								                        case "y":
								                            date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
								                            break;
								                        default : break;
								                    }
								                }
								               
								                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0)
								            }
								            var parts = date && date.match(this.nonpunctuation) || [],
								                date = new Date(),
								                parsed = {}, setters_order = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
								                setters_map = {
								                    yyyy: function(d, v) {
								                        return d.setUTCFullYear(v)
								                    },
								                    yy: function(d, v) {
								                        return d.setUTCFullYear(2000 + v)
								                    },
								                    m: function(d, v) {
								                        v -= 1;
								                        while (v < 0) {
								                            v += 12
								                        }
								                        v %= 12;
								                        d.setUTCMonth(v);
								                        while (d.getUTCMonth() != v) {
								                            d.setUTCDate(d.getUTCDate() - 1)
								                        }
								                        return d
								                    },
								                    d: function(d, v) {
								                        return d.setUTCDate(v)
								                    }
								                }, val, filtered, part;
								            setters_map.M = setters_map.MM = setters_map.mm = setters_map.m;
								            setters_map.dd = setters_map.d;
								            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
								            var fparts = format.parts.slice();
								            if (parts.length != fparts.length) {
								                fparts = $(fparts).filter(function(i, p) {
								                    return $.inArray(p, setters_order) !== -1
								                }).toArray()
								            }
								            if (parts.length == fparts.length) {
								                for (var i = 0, cnt = fparts.length; i < cnt; i++) {
								                    val = parseInt(parts[i], 10);
								                    part = fparts[i];
								                    if (isNaN(val)) {
								                        switch (part) {
								                            case "MM":
								                                filtered = $(dates[language].months).filter(function() {
								                                    var m = this.slice(0, parts[i].length),
								                                        p = parts[i].slice(0, m.length);
								                                    return m == p
								                                });
								                                val = $.inArray(filtered[0], dates[language].months) + 1;
								                                break;
								                            case "M":
								                                filtered = $(dates[language].monthsShort).filter(function() {
								                                    var m = this.slice(0, parts[i].length),
								                                        p = parts[i].slice(0, m.length);
								                                    return m == p
								                                });
								                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								                                break;
								                            default : break;
								                        }
								                    }
								                    parsed[part] = val
								                }
								                for (var i = 0, s; i < setters_order.length; i++) {
								                    s = setters_order[i];
								                    if (s in parsed && !isNaN(parsed[s])) {
								                        setters_map[s](date, parsed[s])
								                    }
								                }
								            }
								           
								            return date
								        },
								        formatDate: function(date, format, language) {
								       
								            var val = {
								                d: date.getUTCDate(),
								                D: dates[language].daysShort[date.getUTCDay()],
								                DD: dates[language].days[date.getUTCDay()],
								                m: date.getUTCMonth() + 1,
								                M: dates[language].monthsShort[date.getUTCMonth()],
								                MM: dates[language].months[date.getUTCMonth()],
								                yy: date.getUTCFullYear().toString().substring(2),
								                yyyy: date.getUTCFullYear()
								            };
								         
								            val.dd = (val.d < 10 ? "0" : "") + val.d;
								            val.mm = (val.m < 10 ? "0" : "") + val.m;
								            var date = [],
								                seps = $.extend([], format.separators);
								            for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
								                if (seps.length) {
								                    date.push(seps.shift())
								                }
								                date.push(val[format.parts[i]])
								               
								            }
								           
								            return date.join("")
								        }
								       
								    };

							  var p = dateWithInvalidFormat.split('-');   
							
							  var date1=new Date(Date.UTC(parseInt(p[0]),parseInt(p[1])-1,parseInt(p[2])));   
							 
									var format='dd-M-yyyy';
						        		var language='en';								    	
								    	format=DPGlobal.parseFormat(format)								    	
								    	if(date1!=undefined && date1!=null && date1!=''){
								    		if(!DPGlobal.isValidDate(date1)){
								    			var val = {
											            d: date1.getUTCDate(),
											            D: dates[language].daysShort[date1.getUTCDay()],
											            DD: dates[language].days[date1.getUTCDay()],
											            m: date1.getUTCMonth() + 1,
											            M: dates[language].monthsShort[date1.getUTCMonth()],
											            MM: dates[language].months[date1.getUTCMonth()],
											            yy: date1.getUTCFullYear().toString().substring(2),
											            yyyy: date1.getUTCFullYear()
											        };											     
											        val.dd = (val.d < 10 ? "0" : "") + val.d;
											        val.mm = (val.m < 10 ? "0" : "") + val.m;
											        var date = [],
											            seps = $.extend([], format.separators);
											        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
											            if (seps.length) {
											                date.push(seps.shift())
											            }
											            date.push(val[format.parts[i]])
											            
											        }
											    
											        return date.join("")
								    		}
								    		else{
								    			return date1;
								    		}
									        
								    	}
							
						};
					})

										//GlobalCalendar PO
							
							  .factory('ILTDetailsWithRespectToGlblCalndrPORequest',
							function() {
					
								var iltGCPOObject = {
									requestId : '',
									courseId : '',
									courseTitle : '',
									startDate : '',
									endDate : '',
									branchID :'',
									branchName :'',
									delName:'',
									short_name : '',
									facultyDtls : ''
								};
								var flag = false;
				
								return {
									getGCPODetailsData : function() {

										return iltGCPOObject;
										
									},
									setGCPODetailsData : function(modelValue) {

										iltGCPOObject = modelValue;
										

									},
									getFlag : function() {

										return flag;
									
									},
									setFlag : function(modelValue) {
										
										flag = modelValue;
										
									}
								};
							})
					.factory(
							'getActiveBranchList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var branchList = [ {
											branchid : 0,
											branchname : 'Select Branch'
										} ];

										httpService
												.httpPostMethod(
														'rest/interface/getActiveBranchList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																branchList
																		.push(data._outObjList3[i]);

															}
															;
														}).error(
														function(data) {

														});

										return branchList;
									} ])

					.factory(
							'getBranchList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var branchList = [ {
											branchid : 0,
											branchname : 'Select Branch'
										} ];

										httpService
												.httpGetMethod(
														'rest/interface/getBranchList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																branchList
																		.push(data._outObjList3[i]);

															}
															;
														}).error(
														function(data) {

														});

										return branchList;
									} ])

											
				
						
                 .factory('ILTDetailsWithRespectToLearningRequest',
							function() {
					
								var iltLrObject = {
									learningRequestTypeArray : [],
									courseId : '',
									courseTitle : '',
									maxCount : '',
									startDate : '',
									endDate : ''
								};
								var flag = false;
								return {
									getLrDetailsData : function() {

										return iltLrObject;
										
									},
									setLrDetailsData : function(modelValue) {

										iltLrObject = modelValue;
										

									},
									getFlag : function() {

										return flag;
									
									},
									setFlag : function(modelValue) {
										
										flag = modelValue;
										
									}
								};
							})
							
							
							
					.factory('DateFormatVaryingService',
							function() {
						  var dates =  {
							        en: {
							            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
							            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
							            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
							            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
							            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
							            today: "Today"
							        }
							    };
						  var iltLrObject = {};
						  var date1='';						  
						  var DPGlobal = {
							        modes: [{
							            clsName: "days",
							            navFnc: "Month",
							            navStep: 1
							        }, {
							            clsName: "months",
							            navFnc: "FullYear",
							            navStep: 1
							        }, {
							            clsName: "years",
							            navFnc: "FullYear",
							            navStep: 10
							        }],
							        isLeapYear: function(year) {
							            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
							        },
							        getDaysInMonth: function(year, month) {
							            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
							        },
							        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
							        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
							        parseFormat: function(format) {
							            var separators = format.replace(this.validParts, "\0").split("\0"),
							                parts = format.match(this.validParts);
							            if (!separators || !separators.length || !parts || parts.length === 0) {
							                throw new Error("Invalid date format.")
							            }
							            return {
							                separators: separators,
							                parts: parts
							            }
							        },
							    	isValidDate:function (currVal)
							    	{
							    		//console.log(currVal);
							    	    if (currVal == '') return false;

							    	    //Declare Regex  
							    	    var rxDatePattern = /^(\d{1,2})(\/|-)([a-zA-Z]{3})(\/|-)(\d{4})$/;
							    	    //var rxDatePattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})[+-.](\d{3})Z/;

							    	    var dtArray = String(currVal).match(rxDatePattern); // is format OK?
							    	    //console.log(dtArray);
							    	    if (dtArray == null) return false;
							    
							    	    var dtDay = parseInt(dtArray[1]);
							    	    var dtMonth = dtArray[3];
							    	    var dtYear = parseInt(dtArray[5]);
							    	   // console.log(dtYear);
							    	    // need to change to lowerCase because switch is
							    	    // case sensitive
							    	    switch (dtMonth.toLowerCase()) {
							    	        case 'jan':
							    	            dtMonth = '01';
							    	            break;
							    	        case 'feb':
							    	            dtMonth = '02';
							    	            break;
							    	        case 'mar':
							    	            dtMonth = '03';
							    	            break;
							    	        case 'apr':
							    	            dtMonth = '04';
							    	            break;
							    	        case 'may':
							    	            dtMonth = '05';
							    	            break;
							    	        case 'jun':
							    	            dtMonth = '06';
							    	            break;
							    	        case 'jul':
							    	            dtMonth = '07';
							    	            break;
							    	        case 'aug':
							    	            dtMonth = '08';
							    	            break;
							    	        case 'sep':
							    	            dtMonth = '09';
							    	            break;
							    	        case 'oct':
							    	            dtMonth = '10';
							    	            break;
							    	        case 'nov':
							    	            dtMonth = '11';
							    	            break;
							    	        case 'dec':
							    	            dtMonth = '12';
							    	            break;
							    	        default : break;
							    	        	
							    	    }

							    	    // convert date to number
							    	    dtMonth = parseInt(dtMonth);
							    	   /* console.log(dtMonth);
									    console.log(dtDay);
									    console.log(dtYear);
									    console.log(dtYear % 4 == 0 );
									    console.log(dtYear % 100 != 0);
									    console.log(dtYear % 400 == 0);
									    console.log(dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));*/
							    	    if (isNaN(dtMonth)) return false;
							    	    else if (dtMonth < 1 || dtMonth > 12) return false;
							    	    else if (dtDay < 1 || dtDay > 31) return false;
							    	    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31) return false;
							    	    else if (dtMonth == 2) {
							    	        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
							    	        if (dtDay > 29 || (dtDay == 29 && !isleap)) return false;
							    	    }

							    	    return true;},
							        parseDate: function(date, format, language) {
							        	
							            if (date instanceof Date) {
							           
							                return date
							            }
							            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
							                var part_re = /([\-+]\d+)([dmwy])/,
							                    parts = date.match(/([\-+]\d+)([dmwy])/g),
							                    part, dir;
							                date = new Date();
							                for (var i = 0; i < parts.length; i++) {
							                    part = part_re.exec(parts[i]);
							                    dir = parseInt(part[1]);
							                    switch (part[2]) {
							                        case "d":
							                            date.setUTCDate(date.getUTCDate() + dir);
							                            break;
							                        case "m":
							                            date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							                            break;
							                        case "w":
							                            date.setUTCDate(date.getUTCDate() + dir * 7);
							                            break;
							                        case "y":
							                            date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							                            break;
							                        default : break;
							                    }
							                }
							               
							                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0)
							            }
							            var parts = date && date.match(this.nonpunctuation) || [],
							                date = new Date(),
							                parsed = {}, setters_order = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
							                setters_map = {
							                    yyyy: function(d, v) {
							                        return d.setUTCFullYear(v)
							                    },
							                    yy: function(d, v) {
							                        return d.setUTCFullYear(2000 + v)
							                    },
							                    m: function(d, v) {
							                        v -= 1;
							                        while (v < 0) {
							                            v += 12
							                        }
							                        v %= 12;
							                        d.setUTCMonth(v);
							                        while (d.getUTCMonth() != v) {
							                            d.setUTCDate(d.getUTCDate() - 1)
							                        }
							                        return d
							                    },
							                    d: function(d, v) {
							                        return d.setUTCDate(v)
							                    }
							                }, val, filtered, part;
							            setters_map.M = setters_map.MM = setters_map.mm = setters_map.m;
							            setters_map.dd = setters_map.d;
							            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
							            var fparts = format.parts.slice();
							            if (parts.length != fparts.length) {
							                fparts = $(fparts).filter(function(i, p) {
							                    return $.inArray(p, setters_order) !== -1
							                }).toArray()
							            }
							            if (parts.length == fparts.length) {
							                for (var i = 0, cnt = fparts.length; i < cnt; i++) {
							                    val = parseInt(parts[i], 10);
							                    part = fparts[i];
							                    if (isNaN(val)) {
							                        switch (part) {
							                            case "MM":
							                                filtered = $(dates[language].months).filter(function() {
							                                    var m = this.slice(0, parts[i].length),
							                                        p = parts[i].slice(0, m.length);
							                                    return m == p
							                                });
							                                val = $.inArray(filtered[0], dates[language].months) + 1;
							                                break;
							                            case "M":
							                                filtered = $(dates[language].monthsShort).filter(function() {
							                                    var m = this.slice(0, parts[i].length),
							                                        p = parts[i].slice(0, m.length);
							                                    return m == p
							                                });
							                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
							                                break;
							                           default : break;
							                        }
							                    }
							                    parsed[part] = val
							                }
							                for (var i = 0, s; i < setters_order.length; i++) {
							                    s = setters_order[i];
							                    if (s in parsed && !isNaN(parsed[s])) {
							                        setters_map[s](date, parsed[s])
							                    }
							                }
							            }
							          
							            return date
							        },
							        formatDate: function(date, format, language) {
							        	
							            var val = {
							                d: date.getUTCDate(),
							                D: dates[language].daysShort[date.getUTCDay()],
							                DD: dates[language].days[date.getUTCDay()],
							                m: date.getUTCMonth() + 1,
							                M: dates[language].monthsShort[date.getUTCMonth()],
							                MM: dates[language].months[date.getUTCMonth()],
							                yy: date.getUTCFullYear().toString().substring(2),
							                yyyy: date.getUTCFullYear()
							            };
							           
							            val.dd = (val.d < 10 ? "0" : "") + val.d;
							            val.mm = (val.m < 10 ? "0" : "") + val.m;
							            var date = [],
							                seps = $.extend([], format.separators);
							            for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							                if (seps.length) {
							                    date.push(seps.shift())
							                }
							                date.push(val[format.parts[i]])
							               
							            }
							          
							            return date.join("")
							        }
							       
							    };
								
								return {
									setDate : function(modelValue) {
										
										date1 = modelValue;
										
										
									},
									getDate : function() {var format='dd-M-yyyy';
					        		var language='en';
						
							    	format=DPGlobal.parseFormat(format)
							   // console.log(date1);
							    	if(date1!=undefined && date1!=null && date1!=''){
							    		if(!DPGlobal.isValidDate(date1)){
							    			var val = {
										            d: date1.getUTCDate(),
										            D: dates[language].daysShort[date1.getUTCDay()],
										            DD: dates[language].days[date1.getUTCDay()],
										            m: date1.getUTCMonth() + 1,
										            M: dates[language].monthsShort[date1.getUTCMonth()],
										            MM: dates[language].months[date1.getUTCMonth()],
										            yy: date1.getUTCFullYear().toString().substring(2),
										            yyyy: date1.getUTCFullYear()
										        };
										     
										        val.dd = (val.d < 10 ? "0" : "") + val.d;
										        val.mm = (val.m < 10 ? "0" : "") + val.m;
										        var date = [],
										            seps = $.extend([], format.separators);
										        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
										            if (seps.length) {
										                date.push(seps.shift())
										            }
										            date.push(val[format.parts[i]])
										          
										        }
										
										        return date.join("")
							    		}
							    		else{
							    			return date1;
							    		}
								        
							    	}
						
							        },
							    	getDateWithFormat : function(formatDate) {
							    		var format=formatDate;
					        		var language='en';
							    
							    	format=DPGlobal.parseFormat(format)
							    	
							    	
							    	if(date1!=undefined && date1!=null && date1!=''){
							    		if(!DPGlobal.isValidDate(date1)){
							        var val = {
							            d: date1.getUTCDate(),
							            D: dates[language].daysShort[date1.getUTCDay()],
							            DD: dates[language].days[date1.getUTCDay()],
							            m: date1.getUTCMonth() + 1,
							            M: dates[language].monthsShort[date1.getUTCMonth()],
							            MM: dates[language].months[date1.getUTCMonth()],
							            yy: date1.getUTCFullYear().toString().substring(2),
							            yyyy: date1.getUTCFullYear()
							        };
							   
							        val.dd = (val.d < 10 ? "0" : "") + val.d;
							        val.mm = (val.m < 10 ? "0" : "") + val.m;
							        var date = [],
							            seps = $.extend([], format.separators);
							        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							            if (seps.length) {
							                date.push(seps.shift())
							            }
							            date.push(val[format.parts[i]])
							      
							        }
							    
							        return date.join("")
							    		}
							    		else{
							    			return date1;
							    		}
							        }
							        
							    	}
							    
								};
							})
					.factory('RememberForAllILTResultPage', function() {

						var Array = {};
						var flag = false;
                        var pageNo=1;
						return {
							getArray : function() {

								return Array;
							},
							setArray : function(modelValue) {

								Array = modelValue;

								
							},
							getFlag : function() {

								return flag;
							},
							setFlag : function(modelValue) {

								flag = modelValue;
								
							},
							getPageNo : function() {

								return pageNo;
							},
							setPageNo : function(modelValue) {

								pageNo = modelValue;
								
							}

						};
					})

					.factory(
							'getActiveDelModeList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var delModeList = [ {
											delmodeid : 0,
											delmodename : 'Select Delivery Mode'
										} ];

										httpService
												.httpGetMethod(
														'rest/interface/getDelModeList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																delModeList
																		.push(data._outObjList3[i]);
															}
															;
														}).error(
														function(data) {

														});

										return delModeList;
									} ])
					.factory(
							'getActiveProjectList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var projectList = [ {
											projectid : 0,
											projectname : 'Select Project Id'
										} ];

										httpService
												.httpGetMethod(
														'rest/role/getProjectList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList1.length; i++) {
																projectList
																		.push(data._outObjList1[i]);

															}
															;
														}).error(
														function(data) {

														});

										return projectList;
									} ])

					.factory(
							'getActiveLangList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var LangList = [ {
											langid : 0,
											langname : 'Select Language'
										} ];

										httpService
												.httpGetMethod(
														'rest/interface/getLangList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																LangList
																		.push(data._outObjList3[i]);
															}
															;
														}).error(
														function(data) {

														});

										return LangList;
									} ])

					.filter(
							'getTopicsArray',
							function() {
								return function(input, searchValue) {
									var out = new Array();
									for ( var i = 0; i < input.length; i++) {
										if (input[i].topicName.substring(0,
												searchValue.length)
												.toLowerCase() == searchValue
												.toLowerCase()) {
											
											out.push(input[i]);
										}
									}
									return out;
								};
							})
					.factory('ILTDetails', function() {
						var data = {
							iltId : 0
						};
						return {
							setProperty : function(modelValue) {							
								data.iltId = modelValue;
							},
							getProperty : function() {								
									return data;
								}
						
						
						};
					})
					
					.factory(
							'ILTSearchFilterDetails',
							function() {
								var pageNo=1;
								var searchCount='';
								var filterData = {
									branch : {
										branchid : 0,
										branchname : 'Select Branch'
									},
									language : {
										langid : 0,
										langname : 'Select Language'
									},
									startDate : '',
									endDate : '',
									delModeId : ''
								};
								var flag = false;
								return {
									getPageNo : function() {
									
										return pageNo;
									},
									setPageNo : function(modelValue) {
										
										pageNo = modelValue;

									},
									getSearchCount : function() {
										
											return searchCount;
										},
										setSearchCount : function(modelValue) {
											
											searchCount = modelValue;

										},
									getFilterData : function() {
									
										return filterData;
									},
									setFilterData : function(modelValue) {

										
										filterData = modelValue;

										
									},
									getFlag : function() {
									
										return flag;
									},
									setFlag : function(modelValue) {

										flag = modelValue;

									}

								};
							})
					.factory('CourseSearchFilterDetails', function() {
						var filterData = {
							deliveryMode : {
								delmodeid : 0,
								delmodename : 'Select Delivery Mode'
							},
							language : {
								langid : 0,
								langname : 'Select Language'
							}
						};
						var flag = false;

						return {
							getFilterData : function() {
								return filterData;
							},
							setFilterData : function(modelValue) {
								
								filterData = modelValue;
							},
							getFlag : function() {
								return flag;
							},
							setFlag : function(modelValue) {
								flag = modelValue;
							}

						};
					})
					.filter(
							'partition',
							function($cacheFactory) {
								var arrayCache = $cacheFactory('partition');
								var filter = function(arr, size) {
									if (!arr) {
										return;
									}
									var newArr = [];
									for ( var i = 0; i < arr.length; i += size) {
										newArr.push(arr.slice(i, i + size));
									}
									var cachedParts;
									var arrString = JSON.stringify(arr);
									cachedParts = arrayCache.get(arrString
											+ size);
									if (JSON.stringify(cachedParts) === JSON
											.stringify(newArr)) {
										return cachedParts;
									}
									arrayCache.put(arrString + size, newArr);
									return newArr;
								};
								return filter;
							})
					.filter('unique', function() {
						return function(collection, keyname) {
							var output = [], keys = [];

							angular.forEach(collection, function(item) {
								var key = item[keyname];
								if (keys.indexOf(key) === -1) {
									keys.push(key);
									output.push(item);
								}
							});

							return output;
						};
					})
					.factory('ILTApprovalDetails', function() {
						var data = {
							approvalPolicyOption : 1017
						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(modelValue) {
								
								data.approvalPolicyOption = modelValue;
								
							}
						};
					})
					.factory('RoleList', function() {
						var data = {
							role : []
						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(roleValue) {
								data.role = roleValue;
							}
						};

					})
					.factory('RequestDetails', function() {
						var data = {
							requestId : '000'
						};
						var reqId='';
						var flag=false;
						var module='';
						var page=1;
						
						
						return {
									getProperty : function() {
										return data;
									},
									setProperty : function(modelValue) {								
										data.requestId = modelValue;								
									},
									getReqId : function() {
										return reqId;
									},
									setReqId : function(modelValue) {								
										reqId = modelValue;								
									},
									getFlag : function() {
										return flag;
									},
									setFlag : function(modelValue) {								
										flag = modelValue;								
									},
									getModule : function() {
										return module;
									},
									setModule : function(modelValue) {								
										module = modelValue;								
									},
									getPage : function() {
										return page;
									},
									setPage : function(modelValue) {								
										page = modelValue;								
									}
								};
					})
					.factory('Worklistdata', function() {
						
						var reqId='';
						var flag=false;
						var module='';
						var page=1;
						var delempNo='';
						var role='';
						return {									
									getReqId : function() {
										return reqId;
									},
									setReqId : function(modelValue) {								
										reqId = modelValue;								
									},
									getFlag : function() {
										return flag;
									},
									setFlag : function(modelValue) {								
										flag = modelValue;								
									},
									getModule : function() {
										return module;
									},
									setModule : function(modelValue) {								
										module = modelValue;								
									},
									getPage : function() {
										return page;
									},
									setPage : function(modelValue) {								
										page = modelValue;								
									},
									getEmpNo : function() {
										return delempNo;
									},
									setEmpNo : function(modelValue) {								
										delempNo = modelValue;								
									},
									getRole : function() {
										return role;
									},
									setRole : function(modelValue) {								
										role = modelValue;								
									}
								};
					})
					.factory('DelegatedFrom', function() {
						var data = {
							delegatedFromId : '000'
						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(modelValue) {
								
								data.delegatedFromId = modelValue;

								
							}
						};
					})
					.factory('CourseDetails', function() {
						var data = {
							courseId : '000',
							showEnrollButton : true
						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(modelValue) {
								
								data.courseId = modelValue;

								
							}
						};
					})

					.factory(
							'SupervisorAssignment',
							function()

							{
								var data = {
									SelectedFlag : false,
									SelectedDetails : '',
									ObjectType : ''

								};
								return {
									getProperty : function() {
										return data;
									},
									setProperty : function(SelectedFlag,
											ObjectDetails, ObjectType) {
										data.SelectedFlag = SelectedFlag;
										data.SelectedDetails = ObjectDetails;
										data.ObjectType = ObjectType;

									}
								};
							})
					.factory('SearchObjectDetails', function() { //Updated for CR#6294914
						var data = {
							objectTitle : '',
							currentPage : 1,
							sortBy		: 0,
							languageId	: 0,
							branchId	: 0,
							delModeId	: 0,
							categoryId	: 0,
							focusAreaId	: 0,
							profLevel	: '',
							internal	: '',
							certElemType: '',
							entityType	: '',
							statusId	: 0,
							vendorIds	: '',
							vendorDesc	: '',
							startDate	: '',
							endDate		: '',
							displayPart	: null
						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(modelValue) {								
								data.objectTitle = modelValue;								
							},
							setNewSearchProp : function(modelValue) {
								data.currentPage = modelValue.currentPage;
								data.sortBy = modelValue.sortBy;
								data.languageId = modelValue.languageId;
								data.branchId = modelValue.branchId;
								data.delModeId = modelValue.delModeId;
								data.categoryId = modelValue.categoryId;
								data.focusAreaId = modelValue.focusAreaId,
								data.internal = modelValue.internal;
								data.certElemType = modelValue.certElemType;
								data.statusId = modelValue.statusId;
								data.vendorIds = modelValue.vendorIds;
								data.vendorDesc = modelValue.vendorDesc;
								data.startDate = modelValue.startDate;
								data.endDate = modelValue.endDate;
								data.entityType = modelValue.entityType;
								data.profLevel = modelValue.profLevel;
								data.displayPart =	modelValue.displayPart;
							},
							resetProp: function(){
								data.objectTitle = 	'';
								data.currentPage = 	1;
								data.sortBy = 		0;
								data.languageId = 	0;
								data.branchId = 	0;
								data.delModeId = 	0;
								data.categoryId = 	0;
								data.focusAreaId =	0;
								data.profLevel =	'';
								data.internal = 	'';
								data.certElemType = '';
								data.statusId = 	0;
								data.vendorIds = 	'';
								data.vendorDesc = 	'';
								data.startDate = 	'';
								data.endDate	=	'';
								data.entityType =	'';
								data.displayPart =	null;
							}
						};
					})
					.factory('courseRegDetails', function() {
						var data = {
							regID : '000',
							viewCode:'00'
						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(modelValue,viewCode) {
								
								data.regID = modelValue;
								data.viewCode=viewCode;//01 Learner 02 Supervisor 03 Admin 
							}
						};
					})
					.factory('ViewTeamEmployeeLearning', function() {
						var data = {
							regID : '000',
							isAdminView:false,
							courseId:'000',
							isRefreshed:true
						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(regid,adminviewflag,courseId,isRefreshed) {
								
								data.regID = regid;
								data.isAdminView=adminviewflag;
								data.courseId=courseId;
								data.isRefreshed=isRefreshed;
							}
						};
					})
					.factory(
							'ViewLearningNavigation',
							function() {
								var data = {
									applyNav : false,
									tabCode : 1,
									currentPageNo : 1
								};
								return {
									getProperty : function() {
										return data;
									},
									setProperty : function(applyNav, tabCode,
											currentPageNo) {

										data.applyNav = applyNav;
										data.tabCode = tabCode;
										data.currentPageNo = currentPageNo;

									}
								};
							})

								.factory(
							'CourseResultPageNav',
							function() {
								var data = {
									
									currentPageNo : 1
								};
								return {
									getProperty : function() {
										return data;
									},
									setProperty : function(currentPageNo) {

										data.currentPageNo = currentPageNo;

									}
								};
							})
							
					.factory(
							'SecondaryMenuDetails',
							[
									'httpService',
									'$http',
									function($http, httpService) {

										var MenuArray = {
											courseMenu : [],
											competencyMenu : [],
											roleMenu : []
										};

										/*
										 * httpService.httpGetMethod('rest/landingPage/getSecondaryMenuDetails',{},$http,true)
										 * .success(function(data) {
										 * 
										 * for(var i=0;i<data._outObj.length;i++) {
										 * switch(data._outObj[i].moduleName) {
										 * case "Courses":
										 * MenuArray.courseMenu.push(data._outObj[i]);
										 * break; case "Competency":
										 * MenuArray.competencyMenu.push(data._outObj[i]);
										 * break; } }; }) .error();
										 */

										$http
												.get(
														'rest/landingPage/getSecondaryMenuDetails')
												.success(
														function(data, status) {

															for ( var i = 0; i < data._outObj.length; i++) {
																switch (data._outObj[i].moduleName) {
																case "Courses":
																	MenuArray.courseMenu
																			.push(data._outObj[i]);
																	break;
																case "Competency":
																	MenuArray.competencyMenu
																			.push(data._outObj[i]);
																	break;
																case "Roles":
																	MenuArray.roleMenu
																			.push(data._outObj[i]);
																	break;
																default:
																	break;
																}
															}
															;

														});

										return MenuArray;
									} ])
					.factory('SelectedTeamMembers', [ function() {
						var data = {

						};
						return {
							getProperty : function() {
							
								return data;
							},
							setProperty : function(empNo, teamMemberDtls) {
								
								data.supervisorEmpNo = empNo;
								data.selectedTeamMembers = teamMemberDtls;

							}
						};
					} ])
          
					.service(
							'mySortingService',
							[
									'$parse',
									function($parse) {
										/*
										 * to sort dynamically kannan 754778
										 */

										this.setArrow = function($scope,
												columnNo) {

											var substring = $scope.previousColumn;
											
											var the_string = 'hide' + substring;
											var model = $parse(the_string);
											
											model.assign($scope, false);
											if ($scope.$root.$$phase != '$apply'
													&& $scope.$root.$$phase != '$digest') {
												$scope.$apply();
											}
										

											$scope.currentColumn = columnNo;
											var the_string1 = 'hide' + columnNo;
										
											var model = $parse(the_string1);
											model.assign($scope, true);
											if ($scope.$root.$$phase != '$apply'
													&& $scope.$root.$$phase != '$digest') {
												$scope.$apply();
											}
										

										}

									} ])
									
									
								
					.service('sortingService', function() {
						/*
						 * this.changeColor = function(id) {
						 * document.getElementById(id).style.border = "2px solid
						 * #d8817e"; }; this.resetcolor = function(id) {
						 * document.getElementById(id).style.border = "1px solid
						 * #cccccc"; };
						 */
						this.setArrow = function($scope, columnNo) {
							if (columnNo == 1) {

								$scope.hide1 = true;
								$scope.hide2 = false;
								$scope.hide3 = false;
								$scope.hide4 = false;
								$scope.hide5 = false;
								$scope.hide6 = false;
								$scope.hide7 = false;
								$scope.hide8 = false;

							} else if (columnNo == 2) {

								$scope.hide1 = false;
								$scope.hide2 = true;
								$scope.hide3 = false;
								$scope.hide4 = false;
								$scope.hide5 = false;
								$scope.hide6 = false;
								$scope.hide7 = false;
								$scope.hide8 = false;
							} else if (columnNo == 3) {

								$scope.hide1 = false;
								$scope.hide2 = false;
								$scope.hide3 = true;
								$scope.hide4 = false;
								$scope.hide5 = false;
								$scope.hide6 = false;
								$scope.hide7 = false;
								$scope.hide8 = false;
							} else if (columnNo == 4) {

								$scope.hide1 = false;
								$scope.hide2 = false;
								$scope.hide3 = false;
								$scope.hide4 = true;
								$scope.hide5 = false;
								$scope.hide6 = false;
								$scope.hide7 = false;
								$scope.hide8 = false;
							} else if (columnNo == 5) {

								$scope.hide1 = false;
								$scope.hide2 = false;
								$scope.hide3 = false;
								$scope.hide4 = false;
								$scope.hide5 = true;
								$scope.hide6 = false;
								$scope.hide7 = false;
								$scope.hide8 = false;
							} else if (columnNo == 6) {

								$scope.hide1 = false;
								$scope.hide2 = false;
								$scope.hide3 = false;
								$scope.hide4 = false;
								$scope.hide5 = false;
								$scope.hide6 = true;
								$scope.hide7 = false;
								$scope.hide8 = false;
							} else if (columnNo == 7) {

								$scope.hide1 = false;
								$scope.hide2 = false;
								$scope.hide3 = false;
								$scope.hide4 = false;
								$scope.hide5 = false;
								$scope.hide6 = false;
								$scope.hide7 = true;
								$scope.hide8 = false;
							} else if (columnNo == 8) {

								$scope.hide1 = false;
								$scope.hide2 = false;
								$scope.hide3 = false;
								$scope.hide4 = false;
								$scope.hide5 = false;
								$scope.hide6 = false;
								$scope.hide7 = false;
								$scope.hide8 = true;
							}
						};

					})

					.service('DataStruct', function() {

						var member = function(elt, set, func) {
							var comp = func || angular.equals;
							if (typeof set === "object" && set.length) {
								for ( var i = 0; i < set.length; i += 1) {
									if (comp(elt, set[i])) {
										return i;
									}
								}
							}
							return false;
						}, add = function(elt, set, func) {
							if (member(elt, set, func) === false) {
								set.unshift(elt);
							}
						};

						this.Set = {};
						this.Set.member = member;
						this.Set.add = add;
					})

					.service(
							'util',
							function() {
								var eq = angular.equals;
								this.isEmpty = function(obj) {
									if (eq(obj, []) || eq(obj, "")
											|| eq(obj, undefined)
											|| eq(obj, {})) {
										return true;
									}

									return false;
								};
							})
					.service('duplicateErrorValidation', function() {
						this.duplicateError = function(msgArray, msg) {
							var f = 0;
							if (msgArray.length != 0) {
								for ( var i = 0; i < msgArray.length; i++) {
									
									if (msgArray[i] == msg) {
										f = 1;
									}
								}
								if (f == 0) {
									return true;
								} else {
									return false;
								}

							} else {
								return true;
							}
						}
					})

					.service(
							'validationService',
							[
									'duplicateErrorValidation',
									function(duplicateErrorValidation) {

										this.validate = function(validateJSON) {
											var _retJSON = [];

											for ( var i = 0; i < validateJSON.length; i++) {

												var fnstring = validateJSON[i]._strCond;
												switch (fnstring) {

												case "nullPat":

													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
																.notEmpty(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}

													break;
												case "numPat":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
																.validateNumber(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
												case "alphabetPat":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
																.validateName(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
												case "specialcharNum":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
																.validateSpecialcharNumber(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
												case "alphabetSearchingPat":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
																.validateNameSearching(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
													
													
												case "vernumPat":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
																.validateVersionNumber(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
												case "decnumPat":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
																.validateDecimalNumber(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
												case "datePat":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
																.validateDate(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
												case "gDate":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var date = validateJSON[i]._arrFields
																.split(',');
														var _bTest = this
																.greaterDate(
																		date[0],
																		date[1]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
												case "urlPat":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var _bTest = this
														.validateUrl(validateJSON[i]._arrFields[j]);
														if (!_bTest) {
															_retJSON
																.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;
												case "gNumber":
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														var num = validateJSON[i]._arrFields[j]
																.split(',');
														var _bTest = this
																.greaterNumber(
																		num[0],
																		num[1]);
														if (!_bTest) {
															_retJSON
																	.push(validateJSON[i]._arrMsg[j]);
														}
													}
													break;

												case "arrayNullPat":
													
													for ( var j = 0; j < validateJSON[i]._arrFields.length; j++) {
														

														for ( var k = 0; k < validateJSON[i]._arrFields[j].length; k++) {

															var _bTest = this
																	.notEmpty((validateJSON[i]._arrFields[j])[k]);
															if (!_bTest) {
																if (duplicateErrorValidation
																		.duplicateError(
																				_retJSON,
																				validateJSON[i]._arrMsg[j])) {
																	_retJSON
																			.push(validateJSON[i]._arrMsg[j]);
																}

															}
														}
													}
													break;
												default:
													break;

												}

											}
											return _retJSON;

										};

										// to check if input is empty
										this.notEmpty = function(input) {
											// input = $.trim(input);
											return (input != '' && input != undefined);
										};

										// to check if the input is valid number
										this.validateNumber = function(input) {

											if (input == null || input == ''
													|| input == undefined)
												return true;

											// Declare Regex
											var rxNoPattern = /^[0-9]*$/;

											var dtArray = input.toString()
													.match(rxNoPattern);

											if (dtArray == null)
												return false;

											else
												return true;
										};
										// to check if the input is valid
										// decimal number
										this.validateDecimalNumber = function(
												input) {

											if (input == null || input == ''
													|| input == undefined)
												return true;

											// Declare Regex
											var rxNoPattern = /[0-9]+(\.[0-9][0-9]?)?/;

											var dtArray = input.toString()
													.match(rxNoPattern);

											if (dtArray == null)
												return false;

											else
												return true;
										};
										// decimal number
										this.validateVersionNumber = function(
												input) {

											if (input == null || input == ''
													|| input == undefined)
												return true;

											// Declare Regex
											var rxNoPattern = /^([0-9]\d*|0)(\.[0-9]\d*)?$/;

											var dtArray = input.toString()
													.match(rxNoPattern);

											if (dtArray == null)
												return false;

											else
												return true;
										};

										
										// to validate Name pattern (to allow
										// only alphabets)
										this.validateName = function(input) {
											if (input == null || input == ''
													|| input == undefined)
												return true;

											// Declare Regex
											var rxNamePattern = /^[a-zA-Z][a-zA-Z\s]+$/;

											var dtArray = input.toString()
													.match(rxNamePattern);
											if (dtArray == null)
												return false;

											else
												return true;
										};

										// to validate Name pattern (to allow
										// single alphabets also)
										this.validateNameSearching = function(input) {
											if (input == null || input == ''
													|| input == undefined)
												return true;

											// Declare Regex
											var rxNamePattern = /^[[a-zA-Z]|[a-zA-Z][a-zA-Z\s]+$/;

											var dtArray = input.toString()
													.match(rxNamePattern);
											if (dtArray == null)
												return false;

											else
												return true;
										};
										//to validate special character and number at starting while creating new Role or course
										
										this.validateSpecialcharNumber = function(input) {
											if (input == null || input == ''
													|| input == undefined)
												return true;

											// Declare Regex             
											var rxNamePattern =  /^[a-zA-z][a-zA-Z0-9!~@#$^&*()-_+=|{}\s]+$/;

											var dtArray = input.toString()
													.match(rxNamePattern);
											if (dtArray == null)
												return false;

											else
												return true;
										};
										
  


										// to check if date1>date2 .You need to
										// pass
										// date in string format
										this.greaterDate = function(date1,
												date2) {
											if (new Date(date1) > new Date(
													date2)) {
												return true;
											} else {
												return false;
											}
										};

										// to check if date1>date2 .You need to
										// pass
										// date in string format
										this.greaterNumber = function(num1,
												num2) {
											if (parseInt(num1) <= parseInt(num2)) {
												return true;
											} else {
												return false;
											}
										};

										// to check if the input is a valid date
										// in the
										// format(dd-Mon-yyyy or dd-MM-yyyy)
										this.validateDate = function(input) {
										
											if (input == null
													|| input == undefined
													|| input == '') {
												return true;
											}

											// Declare Regex
											var rxDatePattern = /^(\d{1,2})(\-)(?:(\d{1,2})|(jan)|(feb)|(mar)|(apr)|(may)|(jun)|(jul)|(aug)|(sep)|(oct)|(nov)|(dec))(\-)(\d{4})$/i;

											var dtArray = input.toLowerCase()
													.match(rxDatePattern);

											if (dtArray == null)
												return false;

											var dtDay = parseInt(dtArray[1]);
											var dtMonth = parseInt(dtArray[3]);
											var dtYear = parseInt(dtArray[17]);

											if (isNaN(dtMonth)) {
												for ( var i = 4; i <= 15; i++) {
													if ((dtArray[i])) {
														dtMonth = i - 3;
														break;
													}
												}
											}

											if (dtMonth < 1 || dtMonth > 12)
												return false;
											else if (dtDay < 1 || dtDay > 31)
												return false;
											else if ((dtMonth == 4
													|| dtMonth == 6
													|| dtMonth == 9 || dtMonth == 11)
													&& dtDay == 31)
												return false;
											else if (dtMonth == 2) {
												var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
												if (dtDay > 29
														|| (dtDay == 29 && !isleap))
													return false;
											}

											return true;
										};

										this.isAllowableText = function (input) {
											return !(/<|>|%/g.test(input));
										};
										
										// to check valid input for free text
										this.validateFreeText = function(input) {
											if (input == null || input == ''
													|| input == undefined)
												return true;
											// Declare Regex
											var rxNoPattern = /^[a-z0-9\~!@#\&\*\(\)_+\?\{\}\[\]\\\-\s\.\:\;\,\/\^\$\"\'\|=]*$/i;
											return rxNoPattern.test(input
													.toString());
										};

										this.validateSpecialText= function(input) //1496239 US_1896
										{
											var rxNoPattern =/^[a-z0-9\,\.\'\-\s\n]+$/i ;
											var n = input.length;
											
											for(var i=0;i<n;i++)
											if(!rxNoPattern.test(input.charAt(i).toString()))
												   return false; 
											
											return true;
										
										}
										
										this.validateCertName = function(input) {
											if (input == null || input == ''
													|| input == undefined)
												return false;

											// Declare Regex
											var rxNoPattern = /^[a-z0-9@#&\*\(\)_\+\?\{\}\[\]\\~!\-\s]+$/i;

											return rxNoPattern.test(input
													.toString());
										};

										this.validateUrl = function(input) {
											var url = /(http|https):\/\/[\w-]+(\.[\w-]+)*(:\d)?([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/i;
											if (!input
													|| typeof input !== "string") {
												return false;
											}

											input = input.replace(
													/^(\s+)|(\s+)$/g, '');

											return url.test(input);
										};
									} ])

					.factory(
							'getActiveLocationList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var locationList = [ {
											locationid : 0,
											locationname : 'Select Location'
										} ];

										httpService
												.httpGetMethod(
														'rest/interface/getActiveLocationList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																locationList
																		.push(data._outObjList3[i]);

															}
															;
														}).error(
														function(data) {

														});

										return locationList;

									} ])

					.factory(
							'getActiveLocationListWithRespectToBranch',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										return {
											getLocations : function(branchId) {
										
												var locationList = [];
												httpService
												.httpPostMethod(
														'rest/interface/getLocationListForBranch',
														{
															branchId : branchId
														}, $http, true)
												/*.httpPostMethod(
														'rest/interface/getLocationListForBranch',
															branchId, $http, true)*/
												.success(
														function(data) {
														
                                                         if( data._outObjList3!=undefined &&  data._outObjList3!=''){
                                                        	 for ( var i = 0; i < data._outObjList3.length; i++) {
																	locationList
																			.push(data._outObjList3[i]);

																}
																
																; 
                                                         }
															
														}).error(
														function(data) {

														});

												return locationList;
											}
										}

									} ])

					.factory(
							'getActivefacilityListWithRespectToLocation',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										return {
											getfacility : function(locationId) {
												// var facilityList = [];
												return httpService
														.httpGetMethod(
																'rest/interface/getFacilityListForLocation',
																{
																	locationId : locationId
																}, $http, true)
														.success(
																function(data) {

																	/*
																	 * for(var
																	 * i=0;i<data._outObjList3.length;i++) {
																	 * facilityList.push(data._outObjList3[i]); };
																	 */
																}).error(
																function(data) {

																});

												// return facilityList;
											}
										}
									} ])
					.factory('updateRole', function()

					{
						var data = {
							roleId : ''

						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(roleId) {
								data.roleId = roleId;

							}
						};

					})
					.factory('TeamMemberDetails', function()

					{
						var data = {
							empId : '0',
							empName : '',
							projectName : ''

						};
						return {
							getProperty : function() {
								return data;
							},
							setProperty : function(empDetails) {
								data.empId = empDetails.empId;
								data.empName = empDetails.empName;
								data.projectName = empDetails.projectName;

							}
						};

					})

					.factory(
							'getActiveTrainingFacilityList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var facilityList = [ {
											facilityid : 0,
											facilityname : 'Select Facility',
											flag : 100
										} ];

										httpService
												.httpGetMethod(
														'rest/interface/getActiveTrainingFacilityList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																facilityList
																		.push(data._outObjList3[i]);

															}
															;
														}).error(
														function(data) {

														});

										return facilityList;

									} ])

					.factory(
							'getActiveVendorList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var vendorList = [ {
											vendorid : 0,
											vendorname : 'Select Vendor'
										} ];

										httpService
												.httpGetMethod(
														'rest/interface/getVendorList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																vendorList
																		.push(data._outObjList3[i]);

															}
															;
														}).error(
														function(data) {

														});

										return vendorList;
									} ])
					.factory(
							'getActiveProgramTypeList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var programTypeList = [{
											programtypeid : 0,
											programtypename : 'Select Program Type'
										} ];

										httpService
												.httpGetMethod(
														'rest/interface/getProgramTypeList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																programTypeList
																		.push(data._outObjList3[i]);

															}
															;
														}).error(
														function(data) {

														});

										return programTypeList;
									} ])
					.factory(
							'getGradeList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var GradeList = [];
										httpService
												.httpPostMethod(
														'rest/interface/getGradeList',
														{}, $http, false)
												.success(
														function(data) {
													
															for ( var i = 0; i < data._outObjList3.length; i++) {
																GradeList
																		.push(data._outObjList3[i]);
															}
															;

														}).error(
														function(data) {

														});

										return GradeList;
									} ])
					.factory(
							'getDesignationList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var DesignationList = [];
										httpService
												.httpPostMethod(
														'rest/interface/getDesignationList',
														{}, $http, false)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																DesignationList
																		.push(data._outObjList3[i]);
															}
															;

														}).error(
														function(data) {

														});

										return DesignationList;
									} ])

					.factory(
							'getRoleList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var roleList = [];
										httpService
												.httpGetMethod(
														'rest/interface/getAllRoles',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList4.length; i++) {
																roleList
																		.push(data._outObjList4[i]);
															}
															;

														}).error(
														function(data) {

														});

										return roleList;
									} ])

					.factory(
							'getIOUList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var IOUList = [];
										httpService
												.httpPostMethod(
														'rest/interface/getIOUList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																IOUList
																		.push(data._outObjList3[i]);

															}
															;

														}).error(
														function(data) {

														});

										return IOUList;
									} ])

					.factory(
							'getGeographyList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var GeographyList = [];
										httpService
												.httpPostMethod(
														'rest/interface/getGeographyList',
														{}, $http, true)
												.success(
														function(data) {

															for ( var i = 0; i < data._outObjList3.length; i++) {
																GeographyList
																		.push(data._outObjList3[i]);

															}
															;

														}).error(
														function(data) {

														});

										return GeographyList;
									} ])

					.factory('getSearchedRoleList', function() {

						var Array = {};
						var flag = false;

						return {
							getArray : function() {

								return Array;
							},
							setArray : function(modelValue) {

								Array = modelValue;

								
							},
							getFlag : function() {

								return flag;
							},
							setFlag : function(modelValue) {

								flag = modelValue;
								
							}

						};
					})
					
						.factory('getRoleCategory', function() {

						var Array = {};
						var flag = false;

						return {
							getArray : function() {

								return Array;
							},
							setArray : function(modelValue) {

								Array = modelValue;

								
							},
							getFlag : function() {

								return flag;
							},
							setFlag : function(modelValue) {

								flag = modelValue;
								
							}

						};
					})
					.factory('getviewAllRoleList', function() {

						var Array = {};
						var flag = false;

						return {
							getArray : function() {

								return Array;
							},
							setArray : function(modelValue) {

								Array = modelValue;

								
							},
							getFlag : function() {

								return flag;
							},
							setFlag : function(modelValue) {

								flag = modelValue;
								
							}

						};
					})
						
					.factory('getSearchedContentList', function() {

						var Array = {};
						var flag = false;

						return {
							getArray : function() {

								return Array;
							},
							setArray : function(modelValue) {

								Array = modelValue;

								
							},
							getFlag : function() {

								return flag;
							},
							setFlag : function(modelValue) {

								flag = modelValue;
								
							}

						};
					})
					
					//US_96 - mapping of Geography and Branch
					
					.factory(
							'getGeographyBranchList',
							[
									'httpService',
									'$http',
									function(httpService, $http) {

										var GeographyBranchList = [];
										httpService
												.httpPostMethod(
														'rest/interface/getGeographyBranchList',
														{}, $http, true)
												.success(
														function(data) {
															
															for ( var i = 0; i < data._outObjList3.length; i++) {
																GeographyBranchList
																		.push(data._outObjList3[i]);

															}
															;

														}).error(
														function(data) {

														});

										return GeographyBranchList;
									} ])
								
					.filter(
							'getEmployee',
							function() {
								return function(input) {

									for ( var i = 0; i < input.length; i++) {

										input[i].empIdWithName = input[i].empId
												+ ' / ' + input[i].empFirstName
												+ ' ' + input[i].empLastName;
										input[i].empName = input[i].empFirstName
												+ ' ' + input[i].empLastName;
										// out.push(input[i]);

									}
									return input;
								};
							})

					.filter('facultyTypeFilter', function() {
						return function(facultyTypeId) {

							if (facultyTypeId == 100)
								return 'Primary';
							else if (facultyTypeId == 200)
								return 'Secondary';
							else if (facultyTypeId == 300)
								return 'Backup';
						};
					})

					.filter(
							'getTopicsArray',
							function() {
								return function(input, searchValue) {
									var out = new Array();
									for ( var i = 0; i < input.length; i++) {
										if (input[i].topicName.substring(0,
												searchValue.length)
												.toLowerCase() == searchValue
												.toLowerCase()) {

											out.push(input[i]);
										}
									}
									return out;
								};

							})
					.filter(
							'getCourse',
							function() {
								return function(input) {
									var out = new Array();
									for ( var i = 0; i < input.length; i++) {
										input[i].courseIdWithName = input[i].courseId
												+ '  /  '
												+ input[i].courseTitle;
									}
									return input;
								};

							})
					.filter('numberArray', function() {
						return function(input, from, to) {
							var result = input || [], i;

							from = parseInt(from);
							to = parseInt(to);

							for (i = from; i <= to; i += 1) {
								result.push(i);
							}

							return result;
						};

					})
					
					.filter('quantifyDate', ['$filter', function ($filter) {
						return function (date) {
							var millisInDay = 86400000,
								d = new Date(date).setHours(0,0,0,0),
								today = new Date().setHours(0,0,0,0),
								tomorrow = today + millisInDay,
								yesterday = today - millisInDay;
							
							
							switch(d) {
								case today: return "Today";
											
								case tomorrow: return "Tomorrow";
												
								case yesterday: return "Yesterday";
												
								default: return $filter('date')(d, 'dd-MMM-yyyy');
							}
						};
					}])
					.filter(
							'readableList',
							function() {
								return function(list, key, filterAttr) {
									var separator = ",", result = "", endSeparator = $.i18n
											.prop("comp.compAdmin.assessmentScheme.text.separator.conjunction"), itr;

									if (list && typeof list === "object"
											&& list.length) {
										for (itr = 0; itr < list.length; itr += 1) {
											if (filterAttr != undefined) {
												if (list[itr][filterAttr]) {
													result += list[itr][key]
															+ separator + " ";
												}
											} else {
												result += list[itr][key]
														+ separator + " ";
											}

										}

										result = result.substring(0,
												result.length - 2);
									}

									return result;
								};
							})

					.filter('days', function() {
						return function(input) {
							var result;

							if (!input || input === "") {
								result = "-";
							} else if (input > 1) {
								result = input + " Days";
							} else {
								result = input + " Day";
							}

							return result;
						};
					})

					.filter('yesNoFilter', function() {
						return function(value) {
							if (value == 'Yes' || value == 't') {
								return true;
							}

							else {
								return false;
							}
						};
					})

					.filter(
							'boolTextifier',
							function() {
								return function(boolVal) {
									var result = $.i18n
											.prop("comp.compAdmin.compType.text.negative");

									if (boolVal) {
										result = $.i18n
												.prop("comp.compAdmin.compType.text.affirmative");
									}

									return result;
								};
							}).filter(
							'digitWordify',
							function() {
								return function(input) {
									var map = [ "Zero", "One", "Two", "Three",
											"Four", "Five", "Six", "Seven",
											"Eight", "Nine", "Ten" ];
									if (!isNaN(input) && 0 <= input
											&& input <= 10) {
										return map[input];
									}
									return "None";
								}
							})
							.factory('getFeedbackSummary', function() {
						
						var iltFlag = false;
						var courseFlag = false;

						return {	
							
							getIltFlag : function() {

								return iltFlag;
							},
							setIltFlag : function(modelValue) {
								
								iltFlag = modelValue;								
							},							
							getCourseFlag : function() {

								return courseFlag;
							},
							setCourseFlag : function(modelValue) {

								courseFlag = modelValue;
								
							}						

						};
					})
  			  // US_203
			  .service('counterValue', function() {

					var twoDigit =  function(value){
						 var valueInt = parseInt(value);
					      if(!isNaN(value) && value >= 0 && value < 10)
					         return "0"+ valueInt;
					      return value+"";
						
					};

					this.Set = {};
					this.Set.twoDigit = twoDigit;
					
				})
				.filter(
					'capitalize',
					function() {  
						return function(input){
							if(input!=undefined){
							if(input.indexOf(' ') !== -1){
								var inputsubstr,i;

								input = input.toLowerCase();
								inputsubstr = input.split(' ');

								for(i = 0; i < inputsubstr.length; i++){
									inputsubstr[i] = capitalizeString(inputsubstr[i]);
								}

								return inputsubstr.toString().replace(/,/g, ' ');
							}
							else 
							{
								input = input.toLowerCase();
								return capitalizeString(input);
							}

							function capitalizeString(inputString){
									return inputString.substring(0,1).toUpperCase() + inputString.substring(1);
							}
						};
					};
				});

		});
