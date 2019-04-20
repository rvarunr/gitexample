'use strict';

define(
		[ 'services', '../require/route-config' ],
		function(app, routeConfig) {		
			return app
					.config(function($routeProvider, $httpProvider) {
						$routeProvider.when('/login', routeConfig.config(
								'../../pages/login.html', 'LoginController'));
						$routeProvider.when('/settings', routeConfig.config(
								'../../pages/mySettings.html',
								'UserProfileController'));
						$routeProvider.when('/errorPage', routeConfig
								.config('../../pages/error/error.html'));
						$routeProvider.when('/globalErrorPage', routeConfig
								.config('../../globalError.html'));
						$routeProvider.when('/testNewFramework', routeConfig
								.config('../../pages/testNewFramework.html'));
						$routeProvider.when('/access', routeConfig
								.config('../../pages/accessPage.html'));
						$routeProvider.when('/noAccess', routeConfig
								.config('../../noAccess.html'));
						$routeProvider.when('/accessDenied', routeConfig
								.config('../../pages/error/accessDenied.html'));
						$routeProvider
								.when(
										'/menu',
										routeConfig
												.config(
														'../../pages/home/applicationHome.html',
														'../../appResources/js/angular/controller/common/funcLandingPageDtlsCtrl'));
						$routeProvider
								.when(
										'/lnk/FAQ',
										routeConfig
												.config(
														'../../pages/home/FAQ.html',
														'../../appResources/js/angular/controller/index/funcFaqCtrl'));
						$routeProvider.when('/SMconfigErrorPage', routeConfig
								.config('../../pages/ConfigError.html'));
						/*
						 * $routeProvider .when( '/Home', routeConfig .config(
						 * '../../pages/home/landingPage.html',
						 * '../../appResources/js/angular/controller/common/funcLandingPageDtlsCtrl'));
						 */
						/*
						 * $routeProvider.when('/Competencies/compHomePage',
						 * routeConfig.config('../../pages/competency/compHomePage.html',
						 * '../../appResources/js/angular/controller/competency/funcCompHomePageCtrl'));
						 * $routeProvider.when('/Competencies/myCompetencies',routeConfig.config('../../pages/competency/compViewCompetencies.html','../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));
						 * $routeProvider.when('/Competencies/viewCompDetails',
						 * routeConfig.config('../../pages/competency/compDetails.html',
						 * '../../appResources/js/angular/controller/competency/funcCompDetailsCtrl'));
						 * $routeProvider.when('/Competencies/SearchCompetency',
						 * routeConfig.config('../../pages/competency/CompSearchComp.html',
						 * '../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						 * $routeProvider.when('/Competencies/GlobalSearch',
						 * routeConfig.config('../../pages/competency/CompGlobalSearchComp.html',
						 * '../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						 * $routeProvider.when('/Competencies/AssignToTeam',
						 * routeConfig.config('../../pages/competency/CompGlblAssignTeamComp.html',
						 * '../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						 * $routeProvider.when('/Competencies/assessmentDtls',
						 * routeConfig.config('../../pages/competency/compAssessmentDtls.html',
						 * '../../appResources/js/angular/controller/competency/funcCompAssessmentDtlsCtrl'));
						 * $routeProvider.when('/Competencies/viewMoreCompetencies',
						 * routeConfig.config('../../pages/competency/compViewMoreCompetencies.html',
						 * '../../appResources/js/angular/controller/competency/funcCompViewMoreCompetenciesCtrl'));
						 */
						/*$routeProvider
								.when(
										'/Course/Create',
										routeConfig
												.config(
														'../../pages/course/createCourse.html',
														'../../appResources/js/angular/controller/course/createCourseController'));*/
						// $routeProvider.when('/Course/Admin/CreateOwnerGroup',
						// routeConfig.config('../../pages/course/createAdminGroup.html',
						// '../../appResources/js/angular/controller/course/createAdminGroupController'));
						
						//manage focus area
						
				$routeProvider
								.when(
										'/CompAdmin/CompManagement/manageFA',
										routeConfig
												.config(
														'../../pages/competency/admin/manageFocusArea.html',
														'../../appResources/js/angular/controller/competency/admin/funcManageFocusAreaCtrl'));

						$routeProvider
						.when(
								'/lnk/CompAdmin/CompManagement/AddFA',
								routeConfig
										.config(
												'../../pages/competency/admin/addFocusArea.html',
												'../../appResources/js/angular/controller/competency/admin/funcAddFocusAreaCtrl'));
						
						
						$routeProvider
						.when(
								'/lnk/CompAdmin/CompManagement/editFA',
								routeConfig
										.config(
												'../../pages/competency/admin/editFocusArea.html',
												'../../appResources/js/angular/controller/competency/admin/funcEditFocusAreaCtrl'));
	// add new certification requests
						
						$routeProvider
						.when(
								'/lnk/Certification/newCertRequests',
								routeConfig
										.config(
												'../../pages/certification/newCertRequests.html',
												'../../appResources/js/angular/controller/certification/funcManageAddNewCertReq'));

						
						$routeProvider
						.when(
								'/lnk/reqList/focusAreaReqList',
								routeConfig
										.config(
												'../../pages/certification/requestList/FocusAreaReqList.html',
												'../../appResources/js/angular/controller/certification/requestList/funcFocusAreaReqList'));

						$routeProvider
						.when(
								'/wrkflw/Competency/focusAreaReq',
								routeConfig
										.config(
												'../../pages/competency/worklist/focusAreaReq.html',
												'../../appResources/js/angular/controller/competency/worklist/funcfocusAreaReqCtrl'));

						
						// Course learner paths
						$routeProvider
								.when(
										'/Course/CourseLandingPage',
										routeConfig
												.config(
														'../../pages/course/courseLandingPage.html',
														'../../appResources/js/angular/controller/course/funcSearchCourseResultCtrl'));

						//exam schedules

				$routeProvider
				.when(
						'/lnk/CertExams/ViewAllSchedule',
						routeConfig
						.config(
								'../../pages/certification/viewAllExamSchedules.html',
						'../../appResources/js/angular/controller/certification/funcViewAllExamSch'));

				// My Learnings
				$routeProvider
				.when(
						'/Course/ViewLearnings',
						routeConfig
						.config(
								'../../pages/course/viewLearnings.html',
						'../../appResources/js/angular/controller/course/funcViewLearningsCtrl'));

						// Learning History Course Details
						$routeProvider
								.when(
										'/lnk/Course/LearningHistoryDetails',
										routeConfig
												.config(
														'../../pages/course/learningHistCourseDetails.html',
														'../../appResources/js/angular/controller/course/funcLearnHistCourseDetailsCtrl'));

						// Course Details
						$routeProvider
								.when(
										'/lnk/Course/Search/CourseDetails/:courseId',
										routeConfig
												.config(
														'../../pages/course/courseDetails.html',
														'../../appResources/js/angular/controller/course/funcSearchCourseResultCtrl'));
						$routeProvider
						.when(
								'/lnk/Course/Search/PortalNonCompliant/:courseId',
								routeConfig
										.config(
												'../../pages/course/courseDetails.html',
												'../../appResources/js/angular/controller/course/funcSearchCourseResultCtrl'));
						
						$routeProvider
						.when(
								'/lnk/Course/Search/Team/EnrollCourseDetails',
								routeConfig
										.config(
												'../../pages/course/viewTeamEnrollmentCourseDetails.html',
												'../../appResources/js/angular/controller/course/funcTeamEnrollmentCourseViewCtrl'));

						$routeProvider
								.when(
										'/lnk/Course/Search/CourseDetails/:courseId/:delModeId',
										routeConfig
												.config(
														'../../pages/course/courseDetails.html',
														'../../appResources/js/angular/controller/course/funcSearchCourseResultCtrl'));

						// Course related mappings
						$routeProvider
								.when(
										'/lnk/Course/Edit',
										routeConfig
												.config(
														'../../pages/course/editCourse.html',
														'../../appResources/js/angular/controller/course/funcEditCourseCtrl'));
						
						$routeProvider
						.when(
								'/Course/RaiseLR',
								routeConfig
										.config(
												'../../pages/course/raiseCDMLearningRequest.html',
												'../../appResources/js/angular/controller/course/funcRaiseCDMLearningRequestCtrl'));

						// Popular Courses
						$routeProvider
								.when(
										'/Course/ViewPopularCourses',
										routeConfig
												.config(
														'../../pages/course/viewPopularCourses.html',
														'../../appResources/js/angular/controller/course/funcViewPopularCoursesCtrl'));

						// New Courses
						$routeProvider
								.when(
										'/Course/ViewNewCourses',
										routeConfig
												.config(
														'../../pages/course/viewNewCourses.html',
														'../../appResources/js/angular/controller/course/funcViewNewCoursesCtrl'));

						// Create Delivery Mode
						$routeProvider
								.when(
										'/lnk/Course/CreateDeliveryMode1',
										routeConfig
												.config(
														'../../pages/course/createdeliverymode1.html',
														'../../appResources/js/angular/controller/course/funcCreatedeliverymodeCtrl1'));

						// Create Owner Group
						$routeProvider
								.when(
										'/Course/Admin/CreateOwnerGroup',
										routeConfig
												.config(
														'../../pages/course/createAdminGroup1.html',
														'../../appResources/js/angular/controller/course/funcCreateAdminGroupCtrl'));

						// Search Course
						$routeProvider
								.when(
										'/lnk/Course/Search',
										routeConfig
												.config(
														'../../pages/course/searchCourseResult.html',
														'../../appResources/js/angular/controller/course/funcSearchCourseResultCtrl'));

						// Course Approval
						$routeProvider
								.when(
										'/wrkflw/Course/CourseApprovalBySupervisor',
										routeConfig
												.config(
														'../../pages/course/CourseApprovalBySupervisor.html',
														'../../appResources/js/angular/controller/course/funcCourseApprovalBySupervisorCtrl'));

						
						// Course Approval
						$routeProvider
								.when(
										'/wrkflw/Course/CourseApprovalByCourseOWner',
										routeConfig
												.config(
														'../../pages/course/CourseApprovalByCourseOwner.html',
														'../../appResources/js/angular/controller/course/funcCourseApprovalByCourseOwnerCtrl'));

						
						// Course RequestList Details
						$routeProvider
								.when(
										'/wrkflw/Course/CourseRequestListDetails',
										routeConfig
												.config(
														'../../pages/course/CourseRequestListDetails.html',
														'../../appResources/js/angular/controller/course/funcCourseRequestListDetailsCtrl'));
						
						// Course RequestList Details For Course OWNER APPROVAl
						
						$routeProvider
						.when(
								'/wrkflw/Course/LearnerDetailsForCourseOwnerApproval',
								routeConfig
										.config(
												'../../pages/course/LnrDtlsForCrseOwnApp.html',
												'../../appResources/js/angular/controller/course/funcLnrDtlsForCrseOwnAppCtrl'));
				
						// Schedule & Exam Registration Request List
						$routeProvider
								.when(
										'/wrkflw/Certification/certSchdlReqList',
										routeConfig
												.config(
														'../../pages/certification/requestList/CertSchdlRequestListDetails.html',
														'../../appResources/js/angular/controller/certification/requestList/funcCertSchdlRequestListDetailsCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Certification/certRegisterSchdlReqLst',
										routeConfig
												.config(
														'../../pages/certification/requestList/CertSchdlRequestListDetails.html',
														'../../appResources/js/angular/controller/certification/requestList/funcCertSchdlRequestListDetailsCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Certification/addNewCertReqLstDtls',
										routeConfig
												.config(
														'../../pages/certification/requestList/addNewCertReqLstDtls.html',
														'../../appResources/js/angular/controller/certification/requestList/funcAddNewCertReqLstDtls'));


						// Compliance Training
						$routeProvider
								.when(
										'/Course/ViewMandatoryTrainings',
										routeConfig
												.config(
														'../../pages/course/viewComplianceTraining.html',
														'../../appResources/js/angular/controller/course/funcViewComplianceTrainingCtrl'));

						// ILT Search Results
						$routeProvider
								.when(
										'/lnk/ILT/SearchForHome',
										routeConfig
												.config(
														'../../pages/ilt/homePageILTResults.html',
														'../../appResources/js/angular/controller/ilt/funcHomePageILTSearchResults'));

						// ILT Search Results
						$routeProvider
								.when(
										'/lnk/ILT/Search',
										routeConfig
												.config(
														'../../pages/ilt/searchILTResult.html',
														'../../appResources/js/angular/controller/ilt/funcSearchILTResultCtrl'));

						// ILT RequestList Details
						$routeProvider
								.when(
										'/wrkflw/ILT/ILTRequestListDetails',
										routeConfig
												.config(
														'../../pages/ilt/ILTRequestListDetails.html',
														'../../appResources/js/angular/controller/ilt/funcILTRequestListDetailsCtrl'));

						// ILT Details
						$routeProvider
								.when(
										'/lnk/ILT/Search/ILTDetails',
										routeConfig
												.config(
														'../../pages/ilt/ILTDetails.html',
														'../../appResources/js/angular/controller/ilt/funcSearchILTResultCtrl'));
						
						$routeProvider
						.when(
								'/lnk/ILT/Search/ILTDetails/:iltId',
								routeConfig
										.config(
												'../../pages/ilt/ILTDetails.html',
												'../../appResources/js/angular/controller/ilt/funcSearchILTResultCtrl'));
						$routeProvider
						.when(
								'/lnk/ILT/CreateBulkILT',
								routeConfig
										.config(
												'../../pages/ilt/editBulkILT.html',
												'../../appResources/js/angular/controller/ilt/funcEditBulkILTCtrl'));
                                               	$routeProvider
						.when(
								'/lnk/ILT/EditBulkILT/:iltId',
								routeConfig
										.config(
												'../../pages/ilt/editBulkILT.html',
												'../../appResources/js/angular/controller/ilt/funcEditBulkILTCtrl'));
						$routeProvider
						.when(
								'/lnk/ILT/ManageBulkILT/:iltId',
								routeConfig
										.config(
												'../../pages/ilt/manageBulkILT.html',
												'../../appResources/js/angular/controller/ilt/funcManageBulkILTCtrl'));

						// ILT Approval
						$routeProvider
								.when(
										'/wrkflw/ILT/ILTApprovalBySupervisor',
										routeConfig
												.config(
														'../../pages/ilt/ILTApprovalBySupervisor.html',
														'../../appResources/js/angular/controller/ilt/funcILTApprovalBySupervisorCtrl'));

						// View Team
						$routeProvider
								.when(
										'/Team/View',
										routeConfig
												.config(
														'../../pages/course/viewTeamSupervisor.html',
														'../../appResources/js/angular/controller/course/funcViewTeamSupervisorCtrl'));

						$routeProvider
								.when(
										'/lnk/Team/AssignILT',
										routeConfig
												.config(
														'../../pages/course/assignILTSupervisor.html',
														'../../appResources/js/angular/controller/course/funcAssignILTSupervisorCtrl'));

						$routeProvider
								.when(
										'/lnk/Team/AssignCourse',
										routeConfig
												.config(
														'../../pages/course/assignCourseSupervisor.html',
														'../../appResources/js/angular/controller/course/funcAssignCourseSupervisorCtrl'));

						$routeProvider
								.when(
										'/lnk/Team/Drop',
										routeConfig
												.config(
														'../../pages/course/SupervisorDropEnrolments.html',
														'../../appResources/js/angular/controller/course/funcSupervisorDropEnrolmentsCtrl'));
						$routeProvider
								.when(
										'/Team/ViewLearning',
										routeConfig
												.config(
														'../../pages/course/viewTeamLearning.html',
														'../../appResources/js/angular/controller/course/funcViewTeamLearningCtrl'));
						$routeProvider
								.when(
										'/lnk/Team/ViewTeamMemberLearning',
										routeConfig
												.config(
														'../../pages/course/viewTeamMemberLearning.html',
														'../../appResources/js/angular/controller/course/funcViewTeamMemberLearningCtrl'));

						$routeProvider
								.when(
										'/lnk/Course/EmployeeLearning',
										routeConfig
												.config(
														'../../pages/course/viewTeamMemberLearning.html',
														'../../appResources/js/angular/controller/course/funcViewTeamMemberLearningCtrl'));

						// Learning Request

						$routeProvider
								.when(
										'/Team/RaiseRequest',
										routeConfig
												.config(
														'../../pages/teamMngmnt/raiseRequestForLearning.html',
														'../../appResources/js/angular/controller/teamMngmnt/funcRaiseRequestForLearningCtrl'));
						$routeProvider
								.when(
										'/Course/ServiceLearningRequest',

										routeConfig
												.config(
														'../../pages/course/ServiceLearningRequest.html',
														'../../appResources/js/angular/controller/course/funcServiceLearningRequestCtrl'));

						
						$routeProvider
								.when(
										'/wrkflw/Course/ServiceLearningRequest/:requestId',
										routeConfig
												.config(
														'../../pages/course/ServiceLearningRequest.html',
														'../../appResources/js/angular/controller/course/funcServiceLearningRequestCtrl'));

						
						$routeProvider
								.when(

										'/wrkflw/Course/LearningRequestListDetails',
										routeConfig
												.config(

														'../../pages/course/LearningRequestListDetails.html',
														'../../appResources/js/angular/controller/course/funcLearningRequestListDetailsCtrl'));

						// Manage Contents Type

						$routeProvider
								.when(
										'/lnk/Course/UploadNewContents',
										routeConfig
												.config(
														'../../pages/course/UploadNewContents.html',
														'../../appResources/js/angular/controller/course/funcUploadNewContentsCtrl'));
						$routeProvider
								.when(
										'/lnk/Course/UploadNewContents/:contentNo',
										routeConfig
												.config(
														'../../pages/course/UploadNewContents.html',
														'../../appResources/js/angular/controller/course/funcUploadNewContentsCtrl'));

						$routeProvider
								.when(
										'/Course/ManageContents',
										routeConfig
												.config(
														'../../pages/course/ManageContents.html',
														'../../appResources/js/angular/controller/course/funcManageContentsCtrl'));

						$routeProvider
								.when(
										'/lnk/Course/CreateContents',
										routeConfig
												.config(
														'../../pages/course/createContents.html',
														'../../appResources/js/angular/controller/course/funcCreateContentsCtrl'));

						// Roles
						$routeProvider
								.when(
										'/lnk/Roles/RoleHomePage',
										routeConfig
												.config(
														'../../pages/role/roleLandingPage.html',
														'../../appResources/js/angular/controller/role/funcRoleLandingPageCtrl'));


						$routeProvider
								.when(
										'/Team/assignRoleToTeam',
										routeConfig
												.config(
														'../../pages/role/assignRoleToTeamMember.html',
														'../../appResources/js/angular/controller/role/funcAssignRoleToTeamMemberCtrl'));

						$routeProvider
								.when(
										'/Roles/ViewRoleProf',
										routeConfig
												.config(
														'../../pages/role/viewRoleProfileForEmployee.html',
														'../../appResources/js/angular/controller/role/funcViewRoleProfileCtrl'));

						$routeProvider
								.when(
										'/Team/ViewTeamRoleProfile',
										routeConfig
												.config(
														'../../pages/role/viewTeamRoleProfile.html',
														'../../appResources/js/angular/controller/role/funcViewTeamRoleProfileCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Roles/RoleApprovalBySupervisor',
										routeConfig
												.config(
														'../../pages/role/roleApprovalBySupervisor.html',
														'../../appResources/js/angular/controller/role/funcRoleApprovalBySupervisorCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Roles/RoleRequestListDetails',
										routeConfig
												.config(
														'../../pages/role/RoleRequestListDetails.html',
														'../../appResources/js/angular/controller/role/funcRoleRequestListDetailsCtrl'));
						$routeProvider
								.when(
										'/Roles/viewAllRoles',
										routeConfig
												.config(
														'../../pages/role/viewAllRoles.html',
														'../../appResources/js/angular/controller/role/funcviewAllRolesCtrl'));

						$routeProvider
								.when(
										'/Roles/BulkBrazilRoleAssignment',
										routeConfig
												.config(
														'../../pages/role/BulkRoleAssignmentForBrazilEmployees.html',
														'../../appResources/js/angular/controller/role/funcBulkRoleAssignmentForBrazilEmplyees'));

						// Notification
						$routeProvider
								.when(
										'/wrkflw/Notification/NotificationHomePage',
										routeConfig
												.config(
														'../../pages/notification/notificationHomePage.html',
														'../../appResources/js/angular/controller/notification/funcNotificationHomePageCtrl'));

						// RequestList

						$routeProvider
								.when(
										'/wrkflw/Request/ViewRequestList',
										routeConfig
												.config(
														'../../pages/requestList/viewRequestList.html',
														'../../appResources/js/angular/controller/requestList/funcViewRequestListCtrl'));
						
						
						
						$routeProvider
						.when(
								'/wrkflw/Request/ViewRequestListFromL1',
								routeConfig
										.config(
												'../../pages/requestList/viewRequestList.html',
												'../../appResources/js/angular/controller/requestList/funcViewRequestListCtrl'));
						

						// WorkList

						$routeProvider
								.when(
										'/WorkList/CommonWorkList',
										routeConfig
												.config(
														'../../pages/workList/commonWorklist.html',
														'../../appResources/js/angular/controller/workList/funcCommonWorklistCtrl'));
						$routeProvider
								.when(
										'/wrkflw/WorkList/DelegateWorkList',
										routeConfig
												.config(
														'../../pages/workList/delegateWorklist.html',
														'../../appResources/js/angular/controller/workList/funcDelegateWorklistCtrl'));
						
						//Modified by Ankit(1091438) for US_868: Start
						$routeProvider
						.when(
								'/Course/SystemReports',
								routeConfig
										.config(
												'../../pages/ilt/systemReportsHomePage.html',
										'../../appResources/js/angular/controller/ilt/funcSystemReportsCtrl')); 
						
						//Modified by Ankit(1091438) for US_868: End				

						/*
						 * $routeProvider.when('/Competencies/compHomePage',
						 * routeConfig.config('../../pages/competency/compHomePage.html',
						 * '../../appResources/js/angular/controller/competency/funcCompHomePageCtrl'));
						 * $routeProvider.when('/Competencies/myCompetencies',routeConfig.config('../../pages/competency/compViewCompetencies.html','../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));
						 * $routeProvider.when('/Competencies/viewCompDetails',
						 * routeConfig.config('../../pages/competency/compDetails.html',
						 * '../../appResources/js/angular/controller/competency/funcCompDetailsCtrl'));
						 * $routeProvider.when('/Competencies/SearchCompetency',
						 * routeConfig.config('../../pages/competency/CompSearchComp.html',
						 * '../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						 * $routeProvider.when('/Competencies/GlobalSearch',
						 * routeConfig.config('../../pages/competency/CompGlobalSearchComp.html',
						 * '../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						 * $routeProvider.when('/Competencies/AssignToTeam',
						 * routeConfig.config('../../pages/competency/CompGlblAssignTeamComp.html',
						 * '../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						 * $routeProvider.when('/Competencies/assessmentDtls',
						 * routeConfig.config('../../pages/competency/compAssessmentDtls.html',
						 * '../../appResources/js/angular/controller/competency/funcCompAssessmentDtlsCtrl'));
						 * $routeProvider.when('/Competencies/viewMoreCompetencies',
						 * routeConfig.config('../../pages/competency/compViewMoreCompetencies.html',
						 * '../../appResources/js/angular/controller/competency/funcCompViewMoreCompetenciesCtrl'));
						 */
						
						$routeProvider
						.when(
								'/Roles/ManageRoleAdminPrivilege',
								routeConfig
										.config(
												'../../pages/role/ManageHRAdminPrivilege.html',
												'../../appResources/js/angular/controller/role/funcManageHRAdminPrivilegeCtrl'));

						
						$routeProvider
								.when(
										'/Course/ManageCourseAdminPrivilege',
										routeConfig
												.config(
														'../../pages/course/ManageCourseAdminPrivilege.html',
														'../../appResources/js/angular/controller/course/funcManageCourseAdminPrivilegeCtrl'));

						$routeProvider
								.when(
										'/Course/ViewEmployeeLearning',
										routeConfig
												.config(
														'../../pages/course/ViewEmployeeLearning.html',
														'../../appResources/js/angular/controller/course/funcViewEmployeeLearningCtrl'));
//------------------------------------------------------------------------------------------------------------------------------------------------
			
						$routeProvider
								.when(
										'/Course/Admin/CreateOwnerGroup',
										routeConfig
												.config(
														'../../pages/course/createAdminGroup1.html',
														'../../appResources/js/angular/controller/course/funcCreateAdminGroupCtrl'));
						//mark completion
						$routeProvider
						.when(
								'/lnk/Course/EmployeeLearningForMarkCompletion',
								routeConfig
										.config(
												'../../pages/course/viewTeamMemberLearningForMarkCompletion.html',
												'../../appResources/js/angular/controller/course/funcViewTeamMemberLearningCtrlForMarkCompletion'));
						//mark completion
						$routeProvider
						.when(
								'/Course/MarkCompletion',
								routeConfig
										.config(
												'../../pages/course/ViewEmployeeLearningForMarking.html',						
										'../../appResources/js/angular/controller/course/funcViewEmployeeLearningCtrlForMarking'));

						
						
						/* Global Calendar*/
						
						$routeProvider
						.when(
								'/lnk/course/GCRequest',
								routeConfig
										.config(
												'../../pages/globalCalendar/GCRequestPage.html',
												'../../appResources/js/angular/controller/globalCalendar/funcGCRequestCtrl'));
						$routeProvider
						.when(
								'/Course/ManageGCRequest',
								routeConfig
										.config(
												'../../pages/globalCalendar/GCRqstrManageRequest.html',
												'../../appResources/js/angular/controller/globalCalendar/funcGCRqstrManageRequest'));
						
						$routeProvider
						.when(
								'/wrkflw/course/GCRequest/:requestId',
								routeConfig
										.config(
												'../../pages/globalCalendar/GCRequestPage.html',
												'../../appResources/js/angular/controller/globalCalendar/funcGCRequestCtrl'));

						
						$routeProvider
						.when(
								'/lnk/course/GCView',
								routeConfig
										.config(
												'../../pages/globalCalendar/GlobalCalendarPage.html',
												'../../appResources/js/angular/controller/globalCalendar/funcGlobalCalendarPageCtrl'));
			
						$routeProvider
						.when(
								'/course/ManageRequestor',
								routeConfig
										.config(
												'../../pages/globalCalendar/GCManagePrivilege.html',
												'../../appResources/js/angular/controller/globalCalendar/funcGCManagePrivilegeCtrl'));

						
						
						$routeProvider
						.when(
								'/wrkflw/GC/GCApprovalByPMO/:requestId',
								routeConfig
										.config(
												'../../pages/globalCalendar/GCApprovalByPMO.html',
												'../../appResources/js/angular/controller/globalCalendar/funcGCApprovalByPMOCtrl'));
						$routeProvider
						.when(
								'/wrkflw/GC/GCApprovalByPO/:requestId',
								routeConfig
										.config(
												'../../pages/globalCalendar/GCApprovalByPO.html',
												'../../appResources/js/angular/controller/globalCalendar/funcGCApprovalByPOCtrl'));
												
						
						$routeProvider
						.when(
								'/wrkflw/GlobalCalendar/GCRequestListDetails',
								routeConfig
										.config(
												'../../pages/globalCalendar/GCRequestListDetails.html',
												'../../appResources/js/angular/controller/globalCalendar/funcGCRequestListDetailsCtrl'));

						// Added by Shivani (829939) for DataFix Support Screen -- Drop Certification
						$routeProvider
						.when(
								'/lnk/dropCertificateRequest/DataFixSupport',
								routeConfig
										.config(
												'../../pages/dataFix/DropCertRequestDataFixSupport.html',						
												'../../appResources/js/angular/controller/dataFix/funcDropCertRequestDataFixSupportCtrl')); 
						
						
						// Added by Neha (964276) for DataFix Support Screen
						$routeProvider
						.when(
								'/lnk/DataFix/LearningHistoryMigration',
								routeConfig
										.config(
												'../../pages/dataFix/migrateCourse.html',						
												'../../appResources/js/angular/controller/dataFix/funcMigrateCourseCtrl'));
						
						
						
						// Added by Namrata (1006843) for DataFix Support Screen
						$routeProvider
						.when(
								'/lnk/MasterDataStatusChange',
								routeConfig
										.config(
												'../../pages/dataFix/masterDataStatusChange.html',						
												'../../appResources/js/angular/controller/dataFix/funcMasterDataStatusChangeCtrl')); 
						

						
						
						// Added by Shivani (829939) for DataFix Support Screen -- Certifcation Revocation
						$routeProvider
						.when(
								'/lnk/certificationRevocation/DataFixSupport',
								routeConfig
										.config(
												'../../pages/dataFix/GrantRevocationDatafix.html',						
												'../../appResources/js/angular/controller/dataFix/funcGrantRevocationDatafixCtrl')); 
						

						// ILT related mapping
					
					
				
						$routeProvider
								.when(
										'/ILT/ManageILT',
										routeConfig
												.config(
														'../../pages/ilt/manageILTLandingPage.html',
														'../../appResources/js/angular/controller/ilt/funcManageILTLandingPageCtrl'));
						$routeProvider
								.when(
										'/lnk/ILT/ManageILT/:iltId',
										routeConfig
												.config(
														'../../pages/ilt/manageILT.html',
														'../../appResources/js/angular/controller/ilt/funcManageILTCtrl'));
				
					
						$routeProvider
								.when(
										'/ILT/CreateILT',
										routeConfig
												.config(
														'../../pages/ilt/editILT.html',
														'../../appResources/js/angular/controller/ilt/funcEditILTCtrl'));
						$routeProvider
								.when(
										'/lnk/ILT/EditILT/:iltId',
										routeConfig
												.config(
														'../../pages/ilt/editILT.html',
														'../../appResources/js/angular/controller/ilt/funcEditILTCtrl'));

						$routeProvider
								.when(
										'/lnk/ILT/ViewILTDetails/:iltId',
										routeConfig
												.config(
														'../../pages/ilt/myIltSessionDetail.html',
														'../../appResources/js/angular/controller/ilt/funcMyILTSessionDetailCtrl'));

						// Course related mappings
						$routeProvider
								.when(
										'/Course/Manage',
										routeConfig
												.config(
														'../../pages/course/ManageCourses.html',
														'../../appResources/js/angular/controller/course/funcManageCoursesCtrl'));
						$routeProvider
								.when(
										'/lnk/Course/Manage/ViewCourseDetails/:course_id',
										routeConfig
												.config(
														'../../pages/course/ViewCourseDetails.html',
														'../../appResources/js/angular/controller/course/funcManageCoursesCtrl'));
						$routeProvider
								.when(
										'/lnk/Course/Manage/EditCourseDetails/:course_id',
										routeConfig
												.config(
														'../../pages/course/editCourse.html',
														'../../appResources/js/angular/controller/course/funcEditCourseCtrl'));
						$routeProvider
								.when(
										'/lnk/Course/editCompliancePolicy/',
										routeConfig
												.config(
														'../../pages/compliance/createCompliancePolicy.html',
														'../../appResources/js/angular/controller/compliance/funcCreateCompliancePolicyCtrl'));
						$routeProvider
								.when(
										'/Course/createCompliancePolicy',
										routeConfig
												.config(
														'../../pages/compliance/ManageComplaince.html',
														'../../appResources/js/angular/controller/compliance/funcManageComplianceCtrl'));
						$routeProvider
								.when(
										'/Course/BulkAssign',
										routeConfig
												.config(
														'../../pages/course/BulkAssignCourse.html',
														'../../appResources/js/angular/controller/course/funcBulkAssignCourseCtrl'));
						$routeProvider
								.when(
										'/lnk/Course/Manage/CourseBasicDetails/:course_id',
										routeConfig
												.config(
														'../../pages/course/editCourse.html',
														'../../appResources/js/angular/controller/course/funcEditCourseCtrl'));
						$routeProvider
								.when(
										'/Course/Manage/CourseBasicDetails',
										routeConfig
												.config(
														'../../pages/course/editCourse.html',
														'../../appResources/js/angular/controller/course/funcEditCourseCtrl'));
						$routeProvider
								.when(
										'/lnk/Course/editCompliancePolicy/:compliance_id',
										routeConfig
												.config(
														'../../pages/compliance/createCompliancePolicy.html',
														'../../appResources/js/angular/controller/compliance/funcCreateCompliancePolicyCtrl'));
						$routeProvider
								.when(
										'/lnk/Course/complianceNotification',
										routeConfig
												.config(
														'../../pages/compliance/compliancePolicyNotification.html',
														'../../appResources/js/angular/controller/compliance/funcNotification'));
						$routeProvider
								.when(
										'/lnk/Course/Manage/CourseBasicDetails/:course_id/Type/:type',
										routeConfig
												.config(
														'../../pages/course/editCourse.html',
														'../../appResources/js/angular/controller/course/funcEditCourseCtrl'));
						$routeProvider
								.when(
										'/Course/BulkTranscriptAssign',
										routeConfig
												.config(
														'../../pages/course/BulkAssignTranscript.html',
														'../../appResources/js/angular/controller/course/funcBulkAssignTranscriptCtrl'));

						// HR Activeties Mappings
						$routeProvider
								.when(
										'/Roles/EmployeeSearch',
										routeConfig
												.config(
														'../../pages/role/ViewEmployeeDetails.html',
														'../../appResources/js/angular/controller/role/funcViewEmployeeDetailsCtrl'));

						// Roles related mappings
						$routeProvider
								.when(
										'/lnk/Roles/UpdateRole/:roleId',
										routeConfig
												.config(
														'../../pages/role/CreateRole.html',
														'../../appResources/js/angular/controller/role/funcCreateRoleCtrl'));
						$routeProvider
								.when(
										'/lnk/Roles/viewRoles/:roleId',
										routeConfig
												.config(
														'../../pages/role/viewRoleForAdmin.html',
														'../../appResources/js/angular/controller/role/funcviewRoleForAdminCtrl'));
						$routeProvider
								.when(
										'/lnk/Roles/viewRoleForGeneralUser/:roleId',
										routeConfig
												.config(
														'../../pages/role/viewRoleForGeneralUser.html',
														'../../appResources/js/angular/controller/role/funcviewRoleForGeneralUserCtrl'));
						$routeProvider
						.when(
								'/lnk/Roles/viewRolePDFForGeneralUser/:formId',
								routeConfig
										.config(
												'../../pages/downloadFile.html',
												'../../appResources/js/angular/controller/funcDownloadFileCtrl'));

						
						$routeProvider
								.when(
										'/Roles/CreateRoleCategory',
										routeConfig
												.config(
														'../../pages/role/CreateRoleCategory.html',
														'../../appResources/js/angular/controller/role/funcCreateRoleCategoryCtrl'));

						$routeProvider
								.when(
										'/lnk/Roles/CreateRole',
										routeConfig
												.config(
														'../../pages/role/CreateRole.html',
														'../../appResources/js/angular/controller/role/funcCreateRoleCtrl'));

						$routeProvider
								.when(
										'/Roles/Search',
										routeConfig
												.config(
														'../../pages/role/SearchRole.html',
														'../../appResources/js/angular/controller/role/funcSearchRoleCtrl'));

						$routeProvider
								.when(
										'/Roles/BulkRoleAssignment',
										routeConfig
												.config(
														'../../pages/role/BulkRoleAssignment.html',
														'../../appResources/js/angular/controller/role/funcBulkRoleAssignmentCtrl'));
						$routeProvider
						.when(
								'/lnk/Feedback/internalIONParticipantFeedback',
								routeConfig
										.config(
												'../../pages/feedback/internalIONParticipantFeedback.html',
												'../../appResources/js/angular/controller/feedback/funcInternalIONPartcipantFeedbackCtrl'));
						$routeProvider
						.when(
								'/lnk/Feedback/internalIONSelfParticipantFeedback',
								routeConfig
										.config(
												'../../pages/feedback/internalIONSelfParticipantFeedback.html',
												'../../appResources/js/angular/controller/feedback/funcInternalIONSelfPartcipantFeedbackCtrl'));
					
						$routeProvider
						.when(
								'/Course/FeedbackSummary',
								routeConfig
										.config(
												'../../pages/feedback/IONFeedbackSummary.html',
												'../../appResources/js/angular/controller/feedback/funcIONFeedbackSummaryCtrl'));
																							

						$routeProvider
								.when(
										'/lnk/Feedback/internalILTParticipantFeedback',
										routeConfig
												.config(
														'../../pages/feedback/internalILTParticipantFeedback.html',
														'../../appResources/js/angular/controller/feedback/funcInternalILTParticipantFeedbackCtrl'));
						$routeProvider
								.when(
										'/lnk/Feedback/internalWBTParticipantFeedback',
										routeConfig
												.config(
														'../../pages/feedback/internalWBTParticipantFeedback.html',
														'../../appResources/js/angular/controller/feedback/funcInternalWBTPartcipantFeedbackCtrl'));
						$routeProvider
								.when(
										'/lnk/Feedback/internalILTFacultyFeedback',
										routeConfig
												.config(
														'../../pages/feedback/internalILTFacultyFeedback.html',
														'../../appResources/js/angular/controller/feedback/funcInternalILTFacultyFeedbackCtrl'));
						$routeProvider
								.when(
										'/lnk/Feedback/externalILTParticipantFeedback',
										routeConfig
												.config(
														'../../pages/feedback/externalILTParticipantFeedback.html',
														'../../appResources/js/angular/controller/feedback/funcExternalILTParticipantFeedbackCtrl'));

						// Comp and Cert Code Starts

						$routeProvider
								.when(
										'/Certification',
										routeConfig
												.config(
														'../../pages/certification/certLandingPage.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						$routeProvider
								.when(
										'/Competencies',
										routeConfig
												.config(
														'../../pages/competency/compHomePage.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));

						$routeProvider
								.when(
										'/Competencies/myCompetencies',
										routeConfig
												.config(
														'../../pages/competency/compViewCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/SupApprovalForProjectRole',
										routeConfig
												.config(
														'../../pages/competency/worklist/compProjectRoleSupApprover.html',
														'../../appResources/js/angular/controller/competency/worklist/funcCompProjectRoleSupApprovalCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/ReassessmentOfHeldComp',
										routeConfig
												.config(
														'../../pages/competency/worklist/compReassessmentOfHeldComp.html',
														'../../appResources/js/angular/controller/competency/worklist/funcCompReassessmentOfHeldCompCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/ReassessmentOfHeldCompAppRej',
										routeConfig
												.config(
														'../../pages/competency/worklist/compReassessmentOfHeldComp.html',
														'../../appResources/js/angular/controller/competency/worklist/funcCompReassessmentOfHeldCompCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/CAG/ApprovalPageForDeffBasics',
										routeConfig
												.config(
														'../../pages/competency/worklist/compDeffBasicsApprover.html',
														'../../appResources/js/angular/controller/competency/worklist/funcCompNewDefBasicsCAGApprovalCtrl'));

						// for sendback at first level by CTAG For Deff Basics
						// Workflow

						$routeProvider
								.when(
										'/wrkflw/CompAdmin/CompManagement/sendBackFrmCtagToCAG',
										routeConfig
												.config(
														'../../pages/competency/worklist/compDeffBasicsSendBackFrmCTAGatFirstLevel.html',
														'../../appResources/js/angular/controller/competency/worklist/funcCompNewDefBasicsCAGApprovalCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/Learner/AddedCompetencies',
										routeConfig
												.config(
														'../../pages/competency/compViewCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/Learner/AddedCompetenciesFromSupList',
										routeConfig
												.config(
														'../../pages/competency/compViewCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/viewCompDetails',
										routeConfig
												.config(
														'../../pages/competency/compDetails.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						
						$routeProvider
						.when(
								'/lnk/Competencies/viewCompDetails/:compId',
								routeConfig
										.config(
												'../../pages/competency/compDetails.html',
												'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/searchCompetency/assignCompCdm',
										routeConfig
												.config(
														'../../pages/competency/CompSearchComp.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/searchCompetency/addCompLearner',
										routeConfig
												.config(
														'../../pages/competency/CompSearchComp.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/searchCompetency/declareCompLearner',
										routeConfig
												.config(
														'../../pages/competency/CompSearchComp.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/searchCompetency/inProgressTab/selfDeclareCompLearner',	// modified for the case when learner clicks on Add self declared competencies button from In progress tab
										routeConfig
												.config(
														'../../pages/competency/CompSearchComp.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						
						//Added by Priyanka for redirection to comp search page from Self declared tab on click of Add self declared competencies button
						$routeProvider
						.when(
								'/lnk/Competencies/searchCompetency/selfDecTab/selfDeclareCompLearner',
								routeConfig
										.config(
												'../../pages/competency/CompSearchComp.html',
												'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						
						$routeProvider
								.when(
										'/lnk/Competencies/Learner/AddedSelfDeclCompetencies',
										routeConfig
												 .config(
														 '../../pages/competency/compViewCompetencies.html',
												 		 '../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));
						$routeProvider
						.when(
								'/lnk/Competencies/viewSelfDeclCompetenciesFromCdm',
								routeConfig
										.config(
												'../../pages/competency/compViewCompetencies.html',
												'../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));
						
						$routeProvider
						.when(
								'/lnk/Competencies/mySelfDeclCompetenciesFromSupervisor',
								routeConfig
										.config(
												'../../pages/competency/compViewCompetencies.html',
												'../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));

				
						$routeProvider
								.when(
										'/lnk/Competencies/searchCompetency/assignProjRoleCompSupervisor',
										routeConfig
												.config(
														'../../pages/competency/CompSearchComp.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/searchCompetency/assignEmpSpecificCompSupervisor',
										routeConfig
												.config(
														'../../pages/competency/CompSearchComp.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/GlobalSrchSupervisor',
										routeConfig
												.config(
														'../../pages/competency/compGlobalSearch.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/AssignToTeamForSupervisor',
										routeConfig
												.config(
														'../../pages/competency/compSuprAssignToTeam.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/viewReqCompetenciesFromCdm',
										routeConfig
												.config(
														'../../pages/competency/compViewCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/viewHeldCompetenciesFromCdm',
										routeConfig
												.config(
														'../../pages/competency/compViewCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/myCompetenciesFromSupervisor',
										routeConfig
												.config(
														'../../pages/competency/compViewCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompMyCompetenciesCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/learner/initiateAssessment',

										routeConfig
												.config(
														'../../pages/competency/compAssessmentDtls.html',
														'../../appResources/js/angular/controller/competency/funcCompAssessmentDtlsCtrl'));
						$routeProvider

								.when(
										'/lnk/Competencies/learner/continueAssessment',
										routeConfig
												.config(
														'../../pages/competency/compAssessmentDtls.html',
														'../../appResources/js/angular/controller/competency/funcCompAssessmentDtlsCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/learner/managerAssessment',
										routeConfig
												.config(
														'../../pages/competency/compAssessmentDtls.html',
														'../../appResources/js/angular/controller/competency/funcCompAssessmentDtlsCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/learner/smeAssessment',
										routeConfig
												.config(
														'../../pages/competency/compAssessmentDtls.html',
														'../../appResources/js/angular/controller/competency/funcCompAssessmentDtlsCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/learner/viewAsmtDtls',
										routeConfig
												.config(
														'../../pages/competency/compAssessmentDtls.html',
														'../../appResources/js/angular/controller/competency/funcCompAssessmentDtlsCtrl'));

						$routeProvider
								.when(
										'/Competencies/viewMoreCompetencies',
										routeConfig
												.config(
														'../../pages/competency/compViewMoreCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompViewMoreCompetenciesCtrl'));
						$routeProvider
								.when(
										'/Competencies/CDM/AssignCompetencies',
										routeConfig
												.config(
														'../../pages/competency/compCdmAssignCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompCDMAssignCompetenciesCtrl'));
						$routeProvider
								.when(
										'/Competencies/CDM/SearchEmpProj',
										routeConfig
												.config(
														'../../pages/competency/compCdmSrchProjEmp.html',
														'../../appResources/js/angular/controller/competency/funcCompCdmSrchProjEmpCtrl'));
						$routeProvider
								.when(
										'/Competencies/CDM/ReqForReassessment',
										routeConfig
												.config(
														'../../pages/competency/compCdmReqForReassessment.html',
														'../../appResources/js/angular/controller/competency/funcCompCdmReqForReassessmentCtrl'));
						$routeProvider
								.when(
										'/Competencies/CDM/ViewCompData',
										routeConfig
												.config(
														'../../pages/competency/compCdmViewCompData.html',
														'../../appResources/js/angular/controller/competency/funcCompCdmViewCompDataCtrl'));
						$routeProvider
								.when(
										'/Competencies/CAG/ManageCompDef',
										routeConfig
												.config(
														'../../pages/competency/compManageCompDefn.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));
						
						$routeProvider
								.when(
										'/Competencies/CAG/CompApproval',
										routeConfig
												.config(
														'../../pages/competency/compCagCompApproval.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/CAG/TagLOForCompApproval',
										routeConfig
												.config(
														'../../pages/competency/compCagCompApproval.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/CAG/TagESOForCompApproval',
										routeConfig
												.config(
														'../../pages/competency/compCagCompApproval.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/CAG/TagLOForviewEditCompObj',
										routeConfig
												.config(
														'../../pages/competency/compCagCompApproval.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/CAG/TagESOForviewEditCompObj',
										routeConfig
												.config(
														'../../pages/competency/compCagCompApproval.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/CAG/TagSMEForviewEditCompObj',
										routeConfig
												.config(
														'../../pages/competency/compCagCompApproval.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/CAG/TagSMEForCompApproval',
										routeConfig
												.config(
														'../../pages/competency/compCagCompApproval.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/learningobjectSearch',
										routeConfig
												.config(
														'../../pages/competency/compcagAddLO.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/ESOSearch',
										routeConfig
												.config(
														'../../pages/competency/compcagAddESO.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/ESOSearchCompApp',
										routeConfig
												.config(
														'../../pages/competency/compcagAddESO.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Competencies/learningobjectSearchCompApp',
										routeConfig
												.config(
														'../../pages/competency/compcagAddLO.html',
														'../../appResources/js/angular/controller/competency/funcCompCagCtrl'));

						$routeProvider
								.when(
										'/Competencies/decPriSecCompetencies',
										routeConfig
												.config(
														'../../pages/competency/compDeclarePriSecCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompDecPriSecCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/viewPriSecCompetenciesCdm',
										routeConfig
												.config(
														'../../pages/competency/compDeclarePriSecCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompDecPriSecCompCtrl'));

						$routeProvider
								.when(
										'/Competencies/Supervisor/ViewTeam',
										routeConfig
												.config(
														'../../pages/competency/compSupervisorViewTeam.html',
														'../../appResources/js/angular/controller/competency/funcCompSupViewTeamCtrl'));

						$routeProvider
								.when(
										'/Competencies/Supervisor/MaintainListofCompForTeam',
										routeConfig
												.config(
														'../../pages/competency/compSuprMaintanedListOfComp.html',
														'../../appResources/js/angular/controller/competency/funcCompSupMaintainedListCtrl'));

						$routeProvider
								.when(
										'/Competencies/Supervisor/AssignCompetencies',
										routeConfig
												.config(
														'../../pages/competency/compSupervisorAssgnCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompSupAssgnCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/Supervisor/AssignProjRoleCompetencies',
										routeConfig
												.config(
														'../../pages/competency/compSupervisorAssgnCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompSupAssgnCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/Supervisor/AssignEmpSpecCompetencies',
										routeConfig
												.config(
														'../../pages/competency/compSupervisorAssgnCompetencies.html',
														'../../appResources/js/angular/controller/competency/funcCompSupAssgnCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/RevalidateComp',
										routeConfig
												.config(
														'../../pages/competency/CompRevalidateComp.html',
														'../../appResources/js/angular/controller/competency/funcCompRevalidateCompCtrl'));

						$routeProvider
								.when(
										'/lnk/Competencies/compGlobalSearch',
										routeConfig
												.config(
														'../../pages/competency/compGlobalSearch.html',
														'../../appResources/js/angular/controller/competency/funcCompSearchCompCtrl'));
						$routeProvider
								.when(
										'/lnk/Competencies/requestListDtls',
										routeConfig
												.config(
														'../../pages/competency/compRequestListDetails.html',
														'../../appResources/js/angular/controller/competency/funcCompRequestListDetailsCtrl'));

						$routeProvider
								.when(
										'/Competencies/smeAssessClosedReq',
										routeConfig
												.config(
														'../../pages/competency/worklist/compSMEAssessClosedReq.html',
														'../../appResources/js/angular/controller/competency/worklist/funcCompSMEAssessClosedReqCtrl'));

						// Certification Route Definition
						$routeProvider
								.when(
										'/Certificate/browseCertification',
										routeConfig
												.config(
														'../../pages/certification/browseCertificates.html',
														'../../appResources/js/angular/controller/certification/funcBrowseCertCtrl'));

						/*
						 * $routeProvider.when('/Certificate/browseCertification',
						 * routeConfig.config('../../pages/certification/certLandingPage.html',
						 * '../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						 */
						$routeProvider
								.when(
										'/Certification/SearchResults',
										routeConfig
												.config(
														'../../pages/certification/certGlblSearchResult.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));

						$routeProvider
								.when(
										'/Certificate/browseExams',
										routeConfig
												.config(
														'../../pages/certification/browseExams.html',
														'../../appResources/js/angular/controller/certification/funcBrowseCertCtrl'));
						$routeProvider
								.when(
										'/Certification/certLandingPage',
										routeConfig
												.config(
														'../../pages/certification/certLandingPage.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						
						$routeProvider
						.when(
								'/lnk/Certification/certLandingPage',
								routeConfig
										.config(
												'../../pages/certification/certLandingPage.html',
												'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						
						$routeProvider
								.when(
										'/lnk/Certification/viewExamDetails',
										routeConfig
												.config(
														'../../pages/certification/certExamDetails.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));

						$routeProvider
						.when(
								'/lnk/Certification/viewExamDetails/:examId',
								routeConfig
										.config(
												'../../pages/certification/certExamDetails.html',
												'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						
						$routeProvider
								.when(
										'/Certification/viewExamdetails',
										routeConfig
												.config(
														'../../pages/certification/certExamDetails.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));

						$routeProvider
								.when(
										'/lnk/Certification/viewCertDetails',
										routeConfig
												.config(
														'../../pages/certification/certDetails.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						
						$routeProvider
						.when(
								'/lnk/Certification/viewCertDetails/:certId',
								routeConfig
										.config(
												'../../pages/certification/certDetails.html',
												'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));

						$routeProvider
								.when(
										'/Certification/viewPopularCerts',
										routeConfig
												.config(
														'../../pages/certification/viewRecPopNewCert.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						$routeProvider
								.when(
										'/Certification/viewNewCerts',
										routeConfig
												.config(
														'../../pages/certification/viewRecPopNewCert.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));

						$routeProvider
								.when(
										'/WorkList/CommonWorkList',
										routeConfig
												.config(
														'../../pages/workList/commonWorklist.html',
														'../../appResources/js/angular/controller/workList/funcCommonWorklistCtrl'));

						// For External Certification Workflow
						$routeProvider
								.when(
										'/wrkflw/Certification/LO_Approval_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_LO_Sup_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_LO_Sup_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/LO_Prior_Apprvl_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_LO_Sup_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_LO_Sup_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/LO_Closure_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_LO_Sup_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_LO_Sup_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/Sup_Approval_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_LO_Sup_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_LO_Sup_WorkflowCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Certification/Req_ReimReq_Page',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_Requestor_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_Requestor_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/Req_ReimReq_ClosurePage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_Requestor_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_Requestor_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/Req_ReimNotReq_Page',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_Requestor_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_Requestor_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/Req_ReimNotReq_ClosurePage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_Requestor_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_Requestor_WorkflowCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Certification/CAd_Reimb_Provsn_WrkflwPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/CAd_Held_GESS_ReqPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/CAd_Initiate_ReimbPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/CAd_Reimb_ReqPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/SO_ApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/SO_Rejection_GESS_Page',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Certification/CertApprvr_ApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertApprvr_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertApprvr_WorkflowCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Certificate/ReqSendBackWrkflwPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_RqstrSendBack_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_RqstrSendBack_WorkflowCtrl'));

						// For Internal Certification Workflow
						$routeProvider
								.when(
										'/wrkflw/Certification/Internal_Cert_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/intCert_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcIntCert_WorkflowCtrl'));

				// For Creation of Certification Schedule
				$routeProvider
				.when(
						'/Certification/LO/ManageCertificationSchedule',
						routeConfig
						.config(
								'../../pages/certification/admin/certManageSchedule.html',
						'../../appResources/js/angular/controller/certification/admin/funcCertManageScheduleCtrl'));
				$routeProvider
				.when(
						'/Certification/LTM/ManageCertificationSchedule',
						routeConfig
						.config(
								'../../pages/certification/admin/certManageSchedule.html',
						'../../appResources/js/angular/controller/certification/admin/funcCertManageScheduleCtrl'));
				$routeProvider
				.when(
						'/Certification/CA/ManageCertificationSchedule',
						routeConfig
						.config(
								'../../pages/certification/admin/certManageSchedule.html',
						'../../appResources/js/angular/controller/certification/admin/funcCertManageScheduleCtrl'));

				$routeProvider
				.when(
						'/lnk/Certification/CA/ManageCertificationSchedule',
						routeConfig
						.config(
								'../../pages/certification/admin/certManageSchedule.html',
						'../../appResources/js/angular/controller/certification/admin/funcCertManageScheduleCtrl'));

				$routeProvider
				.when(
						'/lnk/Certification/CreateCertificationSchedule',
						routeConfig
						.config(
								'../../pages/certification/worklist/create_CertfcnSchedule.html',
						'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));

				$routeProvider
				.when(
						'/lnk/Certification/CreateCertificationScheduleAdmin',
						routeConfig
						.config(
								'../../pages/certification/worklist/create_CertfcnSchedule.html',
						'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));



				$routeProvider
				.when(
						'/lnk/Certification/EditCertificationSchedule',
						routeConfig
						.config(
								'../../pages/certification/worklist/create_CertfcnSchedule.html',
						'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));

				$routeProvider
				.when(
						'/lnk/Certification/EditCertificationScheduleAdmin',
						routeConfig
						.config(
								'../../pages/certification/worklist/create_CertfcnSchedule.html',
						'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));


						$routeProvider
								.when(
										'/wrkflw/Certification/LTMCertScheduleApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/create_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/CAdCertScheduleApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/create_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));

						// For Registration of Certification Schedule
						$routeProvider
								.when(
										'/lnk/Certification/RegisterForCertSchdleExam',
										routeConfig
												.config(
														'../../pages/certification/worklist/register_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcRegister_CertfcnScheduleCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/LORegCertSchdleApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/register_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcRegister_CertfcnScheduleCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/ReqRegCertSchdleApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/register_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcRegister_CertfcnScheduleCtrl'));

						// To Add PDU to Certification/Recertification
						$routeProvider
								.when(
										'/lnk/Certification/AddPdu',
										routeConfig
												.config(
														'../../pages/certification/worklist/addPDU_To_Certification.html',
														'../../appResources/js/angular/controller/certification/worklist/funcAddPDU_To_CertificationCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/LOPduApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/addPDU_To_Certification.html',
														'../../appResources/js/angular/controller/certification/worklist/funcAddPDU_To_CertificationCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/SupPduApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/addPDU_To_Certification.html',
														'../../appResources/js/angular/controller/certification/worklist/funcAddPDU_To_CertificationCtrl'));
						$routeProvider
								.when(
										'/wrkflw/Certification/SOPduApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/addPDU_To_Certification.html',
														'../../appResources/js/angular/controller/certification/worklist/funcAddPDU_To_CertificationCtrl'));

						// Request New Certification Details Page

						$routeProvider
								.when(
										'/wrkflw/Certificate/newCertRequestDtls',
										routeConfig
												.config(
														'../../pages/certification/worklist/newCertRequestDtls.html',
														'../../appResources/js/angular/controller/certification/worklist/funcNewCertRequestDtlsCtrl'));

						// Supervisor Assign Certification/Exam to team members
						$routeProvider
								.when(
										'/Certification/viewTeam',
										routeConfig
												.config(
														'../../pages/certification/certSupervisorAssignTeam.html',
														'../../appResources/js/angular/controller/certification/funcCertSuprvsrAssgnTeamCtrl'));
						$routeProvider
								.when(
										'/lnk/Certification/assgnCertification',
										routeConfig
												.config(
														'../../pages/certification/certSupervisorAssignTeam.html',
														'../../appResources/js/angular/controller/certification/funcCertSuprvsrAssgnTeamCtrl'));

						$routeProvider
								.when(
										'/lnk/Certificate/registration',
										routeConfig
												.config(
														'../../pages/certification/CertRegister1.html',
														'../../appResources/js/angular/controller/certification/funcCertRegisterCtrl'));

						$routeProvider
								.when(
										'/Certificate/addNewCert',
										routeConfig
												.config(
														'../../pages/certification/AddNewCert.html',
														'../../appResources/js/angular/controller/certification/funcAddNewCertCtrl'));
						$routeProvider
								.when(
										"/lnk/Certificate/addNewCert",
										routeConfig
												.config(
														"../../pages/certification/AddNewCert.html",
														"../../appResources/js/angular/controller/certification/funcAddNewCertCtrl"));
						$routeProvider
								.when(
										'/Certificate/myActivities',
										routeConfig
												.config(
														'../../pages/certification/MyActivities.html',
														'../../appResources/js/angular/controller/certification/funcAcquireCertCtrl'));
						
						$routeProvider
						.when(
								'/lnk/Certificate/myActivities',
								routeConfig
										.config(
												'../../pages/certification/MyActivities.html',
												'../../appResources/js/angular/controller/certification/funcAcquireCertCtrl'));
						
						$routeProvider
								.when(
										'/lnk/Certificate/empActivities',
										routeConfig
												.config(
														'../../pages/certification/MyActivities.html',
														'../../appResources/js/angular/controller/certification/funcAcquireCertCtrl'));

						$routeProvider
								.when(
										'/lnk/Certification/reqToMarkAcquire',
										routeConfig
												.config(
														'../../pages/certification/reqToMarkAcq.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						// Added for Competency Admin by Sushant
						$routeProvider
								.when(
										'/CompAdmin/CompManagement/CreateComp',
										routeConfig
												.config(
														'../../pages/competency/admin/compCreateComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						$routeProvider
								.when(
										'/wrkflw/CompAdmin/CompManagement/CreateCompFromCTAG',
										routeConfig
												.config(
														'../../pages/competency/admin/compCreateComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						$routeProvider
								.when(
										'/wrkflw/CompAdmin/CompManagement/approveWorkflow',
										routeConfig
												.config(
														'../../pages/competency/admin/compCreateComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						// added for new Comp Deff Basics approval page for CAG
						// start

						$routeProvider
								.when(
										'/wrkflw/CAG/CompManagement/approveWorkflowForCompDeffBasics',
										routeConfig
												.config(
														'../../pages/competency/admin/compCreateComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						$routeProvider
								.when(
										'/wrkflw/CAG/CompManagement/approveWorkflow/finalSubmition',
										routeConfig
												.config(
														'../../pages/competency/admin/compCreateComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						// added for new Comp Deff Basics approval page for CAG
						// end

						$routeProvider
								.when(
										'/wrkflw/CompAdmin/CompManagement/redefineCompetency',
										routeConfig
												.config(
														'../../pages/competency/admin/compCreateComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						$routeProvider
								.when(
										'/lnk/CompAdmin/CompManagement/CreateNewVersion',
										routeConfig
												.config(
														'../../pages/competency/admin/compCreateComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));
						
						$routeProvider
						.when(
								'/lnk/CompAdmin/CompManagement/CreateNewVersionFromDraft',
								routeConfig
										.config(
												'../../pages/competency/admin/compCreateComp.html',
												'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						$routeProvider
						.when(
								'/lnk/CompAdmin/CompManagement/ViewEditCompetency',
								routeConfig
										.config(
												'../../pages/competency/admin/compViewEditMinorVer.html',
												'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						
						$routeProvider
								.when(
										'/lnk/CompAdmin/CompManagement/ViewEditCompetencyDraft',
										routeConfig
												.config(
														'../../pages/competency/admin/compCreateComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCreateCompCtrl'));

						$routeProvider
								.when(
										'/CompAdmin/CompManagement/ManageComp',
										routeConfig
												.config(
														'../../pages/competency/admin/compManageComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManageCompetencyCtrl'));
						$routeProvider
								.when(
										'/CompAdmin/CompManagement/CAG',
										routeConfig
												.config(
														'../../pages/competency/admin/compCompApprovalGrp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompCompApprovalGrpCtrl'));

						$routeProvider
								.when(
										'/CompAdmin/ManageEmpData/manageSME',
										routeConfig
												.config(
														'../../pages/competency/admin/compManageSME.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManageEmpCtrl'));

						$routeProvider
								.when(
										'/CompAdmin/ManageEmpData/loExemption',
										routeConfig
												.config(
														'../../pages/competency/admin/compLOExemption.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManageEmpCtrl'));

						$routeProvider
								.when(
										'/CompAdmin/ManageEmpData/uploadComp',
										routeConfig
												.config(
														'../../pages/competency/admin/compUploadComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManageEmpCtrl'));

						// Added for Competency Admin by Anjan (759601)
						$routeProvider
								.when(
										'/CompAdmin/CompManagement/AssessmentScheme',
										routeConfig
												.config(
														'../../pages/competency/admin/compAssmntScheme.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));

						// Added for Competency Admin by Anjan (759601)
						$routeProvider
								.when(
										'/CompAdmin/ManageEmpData/heldComp',
										routeConfig
												.config(
														'../../pages/competency/admin/compHeldComp.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManageEmpCtrl'));

						// Added for Competency Admin by Anjan (759601)
						$routeProvider
								.when(
										'/CompAdmin/ManageEmpData/reports',
										routeConfig
												.config(
														'../../pages/competency/admin/compReports.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManageEmpCtrl'));

						// Added for Competency Admin by Anjan (759601)
						$routeProvider
								.when(
										'/CompAdmin/CompManagement/LearningObject',
										routeConfig
												.config(
														'../../pages/competency/admin/compLearningObj.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));

						// Added for Competency Admin by Anjan (759601)
						$routeProvider
								.when(
										'/CompAdmin/CompManagement/CompMigration',
										routeConfig
												.config(
														'../../pages/competency/admin/compCompMigration.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));

						$routeProvider
								.when(
										'/CompAdmin/Misc/managePrivileges',
										routeConfig
												.config(
														'../../pages/competency/admin/compManagePrivilege.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));

						$routeProvider
								.when(
										'/CompAdmin/CompManagement/CompType',
										routeConfig
												.config(
														'../../pages/competency/admin/compCompetencyType.html',

														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));

						// Added for Competency Admin by Nidhi

						$routeProvider
								.when(
										'/CompAdmin/CompManagement/weightageSchemes',
										routeConfig
												.config(
														'../../pages/competency/admin/compWeightageSchemes.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));

						$routeProvider
								.when(
										'/CompetencyAdmin/lnk/createWeightageSchemePage',
										routeConfig
												.config(
														'../../pages/competency/admin/createCompWeightageSchemes.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));

						$routeProvider
								.when(
										'/CompAdmin/CompManagement/expStepObject',
										routeConfig
												.config(
														'../../pages/competency/admin/compExpStepObject.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));

						$routeProvider
								.when(
										'/CompAdmin/CompManagement/createExpStepObject',
										routeConfig
												.config(
														'../../pages/competency/admin/createCompExpStepObject.html',
														'../../appResources/js/angular/controller/competency/admin/funcCompManagementCtrl'));
						// For External Certification Workflow
						$routeProvider
								.when(
										'/Certification/LO_Approval_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_LO_Sup_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_LO_Sup_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/LO_Prior_Apprvl_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_LO_Sup_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_LO_Sup_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/LO_Closure_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_LO_Sup_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_LO_Sup_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/Sup_Approval_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_LO_Sup_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_LO_Sup_WorkflowCtrl'));

						$routeProvider
								.when(
										'/Certification/Req_ReimReq_Page',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_Requestor_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_Requestor_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/Req_ReimReq_ClosurePage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_Requestor_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_Requestor_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/Req_ReimNotReq_Page',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_Requestor_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_Requestor_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/Req_ReimNotReq_ClosurePage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_Requestor_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_Requestor_WorkflowCtrl'));

						$routeProvider
								.when(
										'/Certification/CAd_Reimb_Provsn_WrkflwPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/CAd_Held_GESS_ReqPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/CAd_Initiate_ReimbPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/CAd_Reimb_ReqPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/SO_ApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));
						$routeProvider
								.when(
										'/Certification/SO_Rejection_GESS_Page',
										routeConfig
												.config(
														'../../pages/certification/worklist/extCert_CertAd_SO_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcExtCert_CertAd_SO_WorkflowCtrl'));

						// For Internal Certification Workflow
						$routeProvider
								.when(
										'/Certification/Internal_Cert_WorkflowPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/intCert_WorkflowPage.html',
														'../../appResources/js/angular/controller/certification/worklist/funcIntCert_WorkflowCtrl'));

						// For Creation of Certification Schedule
						$routeProvider
								.when(
										'/Certification/CreateCertificationSchedule',
										routeConfig
												.config(
														'../../pages/certification/worklist/create_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));
						$routeProvider
								.when(
										'/Certification/LTMCertScheduleApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/create_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));
						$routeProvider
								.when(
										'/Certification/CAdCertScheduleApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/create_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcCreate_CertfcnScheduleCtrl'));

						$routeProvider
								.when(
										'/Certification/RegisterForCertSchdleExam',
										routeConfig
												.config(
														'../../pages/certification/worklist/register_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcRegister_CertfcnScheduleCtrl'));
						$routeProvider
								.when(
										'/Certification/LORegCertSchdleApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/register_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcRegister_CertfcnScheduleCtrl'));
						$routeProvider
								.when(
										'/Certification/ReqRegCertSchdleApprvlPage',
										routeConfig
												.config(
														'../../pages/certification/worklist/register_CertfcnSchedule.html',
														'../../appResources/js/angular/controller/certification/worklist/funcRegister_CertfcnScheduleCtrl'));

						// Cert Admin
						$routeProvider
								.when(
										'/Certificate/createNewCertification',
										routeConfig
												.config(
														'../../pages/certification/admin/createNewCert.html',
														'../../appResources/js/angular/controller/certification/admin/funcCreateNewCertCtrl'));
						
						$routeProvider
						.when(
								'/lnk/Certificate/createNewCertification',
								routeConfig
										.config(
												'../../pages/certification/admin/createNewCert.html',
												'../../appResources/js/angular/controller/certification/admin/funcCreateNewCertCtrl'));
						
						$routeProvider
								.when(
										'/Certification/manageCertification',
										routeConfig
												.config(
														'../../pages/certification/admin/manageCert.html',
														'../../appResources/js/angular/controller/certification/admin/funcManageCertCtrl'));
						
						$routeProvider
						.when(
								'/Certification/assignPrivilegeSupUser',
								routeConfig
										.config(
												'../../pages/certification/assnPrvlg.html',
												'../../appResources/js/angular/controller/certification/funcAssnPrvlgCtrl'));
						$routeProvider
								.when(
										'/lnk/Certification/lnkCreateNewVersion',
										routeConfig
												.config(
														'../../pages/certification/admin/createNewCert.html',
														'../../appResources/js/angular/controller/certification/admin/funcCreateNewCertCtrl'));

						$routeProvider
								.when(
										'/Certification/CertPrescriptiveRule',
										routeConfig
												.config(
														'../../pages/certification/admin/CertPrescriptiveRule.html',
														'../../appResources/js/angular/controller/certification/admin/funcCertPrescriptiveRule'));

						$routeProvider
								.when(
										'/Certification/reinitiateWorkflowSearch',
										routeConfig
												.config(
														'../../pages/certification//admin/CertReinitiateWorkflow.html',
														'../../appResources/js/angular/controller/certification/admin/funcReinitiateWorkflow'));

						$routeProvider
								.when(
										'/Certification/reinitiateWorkflowLrnr',
										routeConfig
												.config(
														'../../pages/certification//admin/CertReinitiateWorkflow.html',
														'../../appResources/js/angular/controller/certification/admin/funcReinitiateWorkflow'));
						
						
						$routeProvider
						.when(
								'/lnk/Certification/reinitiateWorkflowLrnr',
								routeConfig
										.config(
												'../../pages/certification//admin/CertReinitiateWorkflow.html',
												'../../appResources/js/angular/controller/certification/admin/funcReinitiateWorkflow'));
						

						$routeProvider
								.when(
										'/Certification/reinitiateWorkflow',
										routeConfig
												.config(
														'../../pages/certification//admin/CertReinitiateWorkflow.html',
														'../../appResources/js/angular/controller/certification/admin/funcReinitiateWorkflow'));

						$routeProvider
								.when(
										'/wrkflw/Certification/reinitiateWorkflowWf',
										routeConfig
												.config(
														'../../pages/certification//admin/CertReinitiateWorkflow.html',
														'../../appResources/js/angular/controller/certification/admin/funcReinitiateWorkflow'));

						$routeProvider
								.when(
										'/Certification/CertPrescriptiveRule',
										routeConfig
												.config(
														'../../pages/certification/admin/CertPrescriptiveRule.html',
														'../../appResources/js/angular/controller/certification/admin/funcCertPrescriptiveRule'));
						$routeProvider
								.when(
										'/Certification/amountRecovery',
										routeConfig
												.config(
														'../../pages/certification/admin/reimbursRecovery.html',
														'../../appResources/js/angular/controller/certification/admin/funcReimbursRecoveryCtrlr'));

						$routeProvider
								.when(
										'/Certification/searchReqId',
										routeConfig
												.config(
														'../../pages/certification/admin/searchReqId.html',
														'../../appResources/js/angular/controller/certification/admin/funcSearchReqIdCtrl'));

						// For Revoke Certification
						$routeProvider
								.when(
										'/lnk/Certification/revokeCertification',
										routeConfig
												.config(
														'../../pages/certification/admin/revokeCertification.html',
														'../../appResources/js/angular/controller/certification/admin/funcRevokeCertificationCtrl'));

						$routeProvider
								.when(
										'/wrkflw/Certification/reinitiateWorkflow',
										routeConfig
												.config(
														'../../pages/certification//admin/CertReinitiateWorkflow.html',
														'../../appResources/js/angular/controller/certification/admin/funcReinitiateWorkflow'));
						$routeProvider
								.when(
										'/Certification/viewSimilarCertDetails',
										routeConfig
												.config(
														'../../pages/certification/certDetails.html',
														'../../appResources/js/angular/controller/certification/funcCertLandingPageCtrl'));
						$routeProvider
								.when(
										'/Certification/UpdateCertificationListPrice',
										routeConfig
												.config(
														'../../pages/certification/admin/update_CertListPrice.html',
														'../../appResources/js/angular/controller/certification/admin/funcUpdate_CertListPriceCtrl'));

						// CDM/LE/LTM/Admin Assign Certification/Exam to team
						// members
						$routeProvider
								.when(
										'/Certification/CDM/assgnCertification',
										routeConfig
												.config(
														'../../pages/certification/admin/certCdmAssignCertToTeam.html',
														'../../appResources/js/angular/controller/certification/admin/funcCertCDMAssignCertToTeamCtrl'));

						$routeProvider
								.when(
										'/Certification/LTM/assgnCertification',
										routeConfig
												.config(
														'../../pages/certification/admin/certCdmAssignCertToTeam.html',
														'../../appResources/js/angular/controller/certification/admin/funcCertCDMAssignCertToTeamCtrl'));

						$routeProvider
								.when(
										'/Certification/CA/assgnCertification',
										routeConfig
												.config(
														'../../pages/certification/admin/certCdmAssignCertToTeam.html',
														'../../appResources/js/angular/controller/certification/admin/funcCertCDMAssignCertToTeamCtrl'));

						$routeProvider
								.when(
										'/lnk/Certification/assgnCertificationSearch',
										routeConfig
												.config(
														'../../pages/certification/admin/certCdmAssgnCertExamSearch.html',
														'../../appResources/js/angular/controller/certification/admin/funcCertCDMAssignCertToTeamCtrl'));

						// For Managing LO and LTM to tag LO to Delivery Center
						// for a Branch
						$routeProvider
								.when(
										'/Certification/ManageLoTag',
										routeConfig
												.config(
														'../../pages/certification/admin/manage_LoTagDelCenter.html',
														'../../appResources/js/angular/controller/certification/admin/funcManageTagLoDel_CenterCtrl'));

						$routeProvider
								.when(
										'/Certification/assignedCertification',
										routeConfig
												.config(
														'../../pages/certification/admin/assignedCert.html',
														'../../appResources/js/angular/controller/certification/admin/funcAssignedCertCtrl'));

						/*'/lnk/proxy/assignment'*/
						$routeProvider
						.when(
								'/Competencies/Proxy_Role',
								routeConfig
										.config(
												'../../pages/proxyRole/proxyRoleReport.html',
												'../../appResources/js/angular/controller/proxyRole/funcProxyRole'));
						$routeProvider
						.when(
								'/Competencies/Supervisor/MangProxyRole',
								routeConfig
										.config(
												'../../pages/proxyRole/proxyRole.html',
												'../../appResources/js/angular/controller/proxyRole/funcProxyRole'));

						
						$routeProvider
								.when(
										'/Certification/assignedCertification/supervisor',
										routeConfig
												.config(
														'../../pages/certification/admin/assignedCert.html',
														'../../appResources/js/angular/controller/certification/admin/funcAssignedCertCtrl'));

						// For Certification Request List.
						$routeProvider
								.when(
										'/wrkflw/Certification/CertIntExtRequestList',
										routeConfig
												.config(
														'../../pages/certification/requestList/extIntWrkflwRequestList.html',
														'../../appResources/js/angular/controller/certification/requestList/funcExtIntWrkflwRequestList'));

						$routeProvider
								.when(
										'/wrkflw/Certification/CertMrkAcqrRequestList',
										routeConfig
												.config(
														'../../pages/certification/requestList/reqToMrkAcqrRequestList.html',
														'../../appResources/js/angular/controller/certification/requestList/funcExtIntWrkflwRequestList'));

						// Comp and Cert Code ends

						$routeProvider
								.when(
										'/lnk/Utility/Notification',
										routeConfig
												.config(
														'../../pages/test/notificationBatch.html',
														'../../appResources/js/angular/controller/test/funcNotificationBatchCtrl'));
						
						$routeProvider
						.when(
								'/Certification/L1SupportEmpSearch',
								routeConfig
										.config(
												'../../pages/test/L1SupportViewDetails.html',
												'../../appResources/js/angular/controller/test/funcL1SupportViewDetails'));
						
						$routeProvider
						.when(
								'/Certification/Admin/ManageCVO',
								routeConfig
										.config(
												'../../pages/certification/admin/manageCVO.html',
												'../../appResources/js/angular/controller/certification/admin/funcManageCVOCtrl'));

						//Added by Shweta (256355) for DataFix Screens
						$routeProvider
						.when(
								'/DataFix/UploadCertDtls',
								routeConfig
										.config(
												'../../pages/dataFix/dataFixUploadCertDtls.html',
												'../../appResources/js/angular/controller/dataFix/funcDFUploadCertDtlsCtrl'));

						
						// Added by Shweta (256355) for DataFix Support Enforcement Screen
						$routeProvider
						.when(
								'/lnk/DataFix/EnforcementSupport',
								routeConfig
										.config(
												'../../pages/dataFix/dataFixEnforcementSupport.html',						
												'../../appResources/js/angular/controller/dataFix/funcDatafixEnforcementSupportCtrl')); 
						
						
						
						$routeProvider
						.when(
								'/lnk/Certification/tagECert',
								routeConfig
										.config(
												'../../pages/certification/admin/TagECert_Certification.html',
												'../../appResources/js/angular/controller/certification/admin/funcTagECert_CertificationCtrl'));
					
							$routeProvider
							.when(
								'/lnk/Course/Manage/TagEcert/',
								routeConfig
										.config(
												'../../pages/course/EcertificationCourse.html',
												'../../appResources/js/angular/controller/course/funcEcertificationDetailsCtrl'));
						$routeProvider
						.when(
								'/Course/TagEcertification',
								routeConfig
										.config(
												'../../pages/settings/LtmHomePage.html',
												'../../appResources/js/angular/controller/settings/funcLtmEcertification'));
						
						// Added by Priyanka (681320) for e-certificate tagging functionality by Competency Admin

						$routeProvider
						.when(
								'/lnk/CompAdmin/CompManagement/TagEcertificate',
								routeConfig
										.config(
												'../../pages/competency/admin/compAdminTagEcertificate.html',
												'../../appResources/js/angular/controller/competency/admin/funcCompAdminTagEcertCtrl'));
						
						// Added by Shivani (829939) for Manage Privilege Support Screen
						$routeProvider
						.when(
								'/lnk/ManageRole',
								routeConfig
										.config(
												'../../pages/settings/ManageRoleForSupport.html',						
												'../../appResources/js/angular/controller/settings/funcManageRoleForSupportCtrl')); 

						/*Added for dashboard 1007360*/
						$routeProvider
						.when(
								'/Gamification/Configure',
								routeConfig
										.config(
												'../../pages/gamification/adminGamification.html',
												'../../appResources/js/angular/controller/gamification/AdminGamfCtrl'));
						
						$routeProvider
						.when(
								'/lnk/dashboard',
								routeConfig
										.config(
												'../../pages/dashboard/dashboard.html',
												'../../appResources/js/angular/controller/dashboard/funcDashboardCtrl'));
						
						// Added by Priyanka for CCCA User stories. 
						$routeProvider
						.when(
								'/lnk/Competency/createNewCompRequest',
								routeConfig
										.config(
												'../../pages/competency/createNewCompetencyRequest.html',
												'../../appResources/js/angular/controller/competency/funcCreateNewCompRequestCtrl'));
						
						//for Request List
						$routeProvider
						.when(
								'/lnk/Competency/newCompReqLstDtls',
								routeConfig
										.config(
												'../../pages/competency/requestList/newCompetencyReqList.html',
												'../../appResources/js/angular/controller/competency/requestList/funcNewCompetencyReqListCtrl'));

						//for Worklist CCA
						
						$routeProvider
						.when(
								'/wrkflw/newCompetency/approvalWrkflw/newCompWorkLstDtls',
								routeConfig
										.config(
												'../../pages/competency/worklist/newCompWorklistDetails.html',
												'../../appResources/js/angular/controller/competency/worklist/funcNewCompWorklistDetailsCtrl'));

						//-----------CCCA section ends here-----------------------------------------------------
						
						$routeProvider
						.when('/lnk/GlobalSearch/All/:searchText',
							routeConfig.config(
												'../../pages/search/search_all.html',
												'../../appResources/js/angular/controller/search/funcSearchAllCtrl'));
						
						// Legacy Search
						$routeProvider
								.when(
										'/lnk/LegacySearch',
										routeConfig
												.config(
														'../../pages/search/legacySearch.html',
														'../../appResources/js/angular/controller/search/funcSearchOldPage'));

						//For US_463 for E-Cert feedback form
						$routeProvider
						.when(
								'/lnk/Certificate/viewECertFeedback',
								routeConfig
										.config(
												'../../pages/certification/ECertFeedback.html',
												'../../appResources/js/angular/controller/certification/funcECertFeedbackCtrl'));
						//For US_591 for Grant Competency Retrospectively
						$routeProvider
						.when(
								'/lnk/CompAdmin/GrantCompetencyRetrospectively',
								routeConfig
										.config(
												'../../pages/competency/admin/compAdminGrantCompetency.html',
												'../../appResources/js/angular/controller/competency/admin/funcCompAdminGrantCompCtrl'));
						//Added by Shweta for Analytics Dashboard
						$routeProvider
						.when(
								'/Analytics/Dashboard',
								routeConfig
										.config(
												'../../pages/analytics/analyticsDashboard.html',
												'../../appResources/js/angular/controller/analytics/funcAnalyticsDashboardCtrl'));
					
						$routeProvider
						.when(
								'/lnk/Analytics/CourseDashboard',
								routeConfig
										.config(
												'../../pages/analytics/analyticsCourseDashboard.html',
												'../../appResources/js/angular/controller/analytics/funcAnalyticsCourseDashboardCtrl'));
					
						$routeProvider
						.when(
								'/lnk/Analytics/CompetencyDashboard',
								routeConfig
										.config(
												'../../pages/analytics/analyticsCompDashboard.html',
												'../../appResources/js/angular/controller/analytics/funcAnalyticsCompDashboardCtrl'));
					
						$routeProvider
						.when(
								'/lnk/Analytics/CertificationDashboard',
								routeConfig
										.config(
												'../../pages/analytics/analyticsCertDashboard.html',
												'../../appResources/js/angular/controller/analytics/funcAnalyticsCertDashboardCtrl'));
					
		
						//------------------Analytics Dashboard ends here------------------------------------
						
						//Added by Shikhar for US_1075 and US_1080
						$routeProvider
						.when(
								'/lnk/Certificate/viewECertFeedback/:reqId',
								routeConfig
										.config(
												'../../pages/certification/ECertFeedback.html',
												'../../appResources/js/angular/controller/certification/funcECertFeedbackCtrl'));
		
						$routeProvider.otherwise({
							redirectTo : '/Home'
						});
											

						// End Admin Code while Merging for Common EAR
						//Added for US_557 Starts
						$routeProvider
						.when(
								'/Certification/ViewProgramLevelFeedback',
								routeConfig
										.config(
												'../../pages/certification/viewProgramLevelFeedback.html',
												'../../appResources/js/angular/controller/certification/funcViewProgramLevelFeedbackCtrl'));

						//Added for US_557 Ends
						/*
						 * $routeProvider.otherwise({ redirectTo :
						 * '/Competencies/compHomePage' });
						 */
						function exampleInterceptor($q, $log, $location,
								$filter) {
							function success(response) {
								$ = jQuery;
								var _ERROR_URI_ = response.data._ERROR_URI_;
								var _strMethodName = response.data._strMethodName;
								if (_ERROR_URI_ == "#@logoutApp@#") {
									location.href = "/iEvolve/login.html";
								} else if (_strMethodName == "#@SMLogout@#") {
									location.href = _ERROR_URI_;
								}else if(_ERROR_URI_ == "#@Sessiontimeout@#")
									{
										location.href = "/iEvolve/login.html";
									}
								if (!(response.config.url.lastIndexOf('.') > -1)
										&& !(response.config.url.indexOf('accessVerification') > -1)) {
									$("#loadingModal").modal("hide");
								}
								if (response.data == 'SM_USER_CHANGE'
										|| response.data == 'SESSION_EXPIRED') {
									location.href = "index.html?cd="
											+ (new Date()).getTime();
								} else if (response.data == 'SM_USER_NULL'
										|| response.data == 'INVALID_HEADER'
										|| response.data == 'NO_ROLES_FOUND') {
									location.href = "noAccess.html";
								} else if (response.data == 'JAR_TYPE_PERFORMANCE') {
									location.href = "/login";
								}
								return response;
							}

							function error(response) {
								$ = jQuery;
								var _ERROR_URI_ = response.data._ERROR_URI_;
								
								if(_ERROR_URI_ == "#@heavyLoad@#")
								{
								location.href = "/iEvolve/pages/loginHeavyLoadError.html";
								return ;
								}
														
								
								if (!(response.config.url.lastIndexOf('.') > -1)
										&& !(response.config.url.indexOf('accessVerification') > -1)) {
									$("#loadingModal").modal("hide");
								}
								var status = response.status;
								var jsonStr = response.data;
								if (response.data == 'SM_USER_CHANGE'
										|| response.data == 'SESSION_EXPIRED') {
									location.href = "index.html?cd="
											+ (new Date()).getTime();
								} else if (response.data == 'SM_USER_NULL'
										|| response.data == 'INVALID_HEADER'
										|| response.data == 'NO_ROLES_FOUND') {
									location.href = "noAccess.html";
								}
								if (jsonStr.ERROR_MSG != null) {
									location.href = jsonStr.ERROR_MSG;
								}
								if (status == '401') {
									location.href = "noAccess.html";
								} else if (status == '402') {
									location.href = "accessDenied.html";
								} else if (status == '403') {
									location.href = "accessDenied.html";
								} else if (status == '501') {
									$location.path("/globalErrorPage");
								} else {
									var _ERROR_URI_ = response.data._ERROR_URI_;
									var _strMethodName = response.data._strMethodName;
									
									if (_ERROR_URI_ == "#@logoutApp@#") {
										location.href = "/iEvolve/login.html";
									} else if (_strMethodName == "#@SMLogout@#") {
										location.href = _ERROR_URI_;
									} else if(_ERROR_URI_ == "#@Sessiontimeout@#")
									{
										location.href = "/iEvolve/login.html";
									}	
									if (typeof (_ERROR_URI_) == 'undefined'
											|| _ERROR_URI_ == null) {
										// for site minder
										location.href = "index.html?cd="+ (new Date()).getTime();
										
										// for non site minder
										//location.href = "/iEvolve/login.html";
									} else {
										if (_ERROR_URI_ != null) {
											if (_ERROR_URI_.indexOf("#@NA@#") > -1) {
												return $q.reject(response);
											} else {
												$location
														.path(jsonStr._ERROR_URI_);
											}
										} else {
											$log.error('Response status: '
													+ status + '. ' + response);
											$location.path("/errorPage");
										}
									}
								}
							}
							return function(promise) {
								return promise.then(success, error);
							};
						}
						;
						$httpProvider.responseInterceptors
								.push(exampleInterceptor);

						return app;
					});
		});

// Function to support Internationalization.

function setlanguage(lang) {
	$ = jQuery;
	$.i18n.properties({
		name : [ 'messages' ],
		path : 'appResources/i18n/',
		mode : 'map',
		language : lang
	});
}

// ----------------------------------displayMenu.js-------------------------------------------------------//

var member = function(elt, set, eq) {
	if (typeof set === "object" && set.length) {
		eq = eq || angular.equals;
		for ( var i = 0; i < set.length; i += 1) {
			if (eq(elt, set[i])) {
				return true;
			}
		}
	}
	return false;
}, add = function(elt, set, eq) {
	if (!member(elt, set, eq)) {
		set.unshift(elt);
	}
};

var makeTree = function() {
	var node = function(data) {
		return {
			data : data,
			children : []
		};
	},

	root = node({
		id : 0
	}),

	by = function(obj1, obj2) {
		if (obj1.data.id === obj2.data.id) {
			return true;
		}

		return false;
	},

	shell = function(menuList, parent) {
		var current, i;

		parent = parent || root;
		if (typeof menuList === "object" && menuList.length) {

			for (i = 0; i < menuList.length; i += 1) {
				current = menuList[i];
				if (current.parentid === parent.data.id) {
					add(node(current), parent.children, by);
				}
			}

			parent.children = parent.children.sort(function(obj1, obj2) {
				return (obj1.data.orderNo - obj2.data.orderNo);
			});

			for (i = 0; i < parent.children.length; i += 1) {
				makeTree(menuList, parent.children[i]);
			}
		}
		return parent;
	};

	return shell;
}();

var prepareMenuUI = function(menuTree) {	
	var level0 =$("<div id = 'utxMenu' class = 'navbar yamm' style = 'margin-left:-18px;float: left;background:none;height:49.5px;'><ul class = 'nav'></ul></div>"), level1, level2, i, node, j,

	rbuild = function(tree) {
		var j, ui, node, show = (10 < tree.data.id && tree.data.id < 100) ? "display:none;"
				: "";

		if (tree.children.length > 0) {
			if ((100 < tree.data.id && tree.data.id < 1000)
					|| tree.data.url == null) {

				ui = $("<li><ul class = 'span3 unstyled'><li><p><strong style='font-size: 13px;'>"
						+ tree.data.text
						+ "</strong>&nbsp;</p><hr class='hrDropdown'></li></ul></li>");
			} else {
				ui = $("<ul class = 'span3 unstyled'><li>"
						+ "<a class='link' href= '#'"
						+ "style =  '"
						+ show
						+ "'"
						+ tree.data.url
						+ "' target='_self' style = 'font-style: normal; text-shadow: none; font-size: 13px;'>"
						+ tree.data.text + "</a></li></ul>");

			}

		} else {

			if(tree.data.text.length<=35)
			{
			ui = $("<li>"
					+ "<a class='link' ng-click= \"redirectToUrl('"
					+ tree.data.url
					+ "','"
					+ tree.data.parentid
					+ "')\""
					+ "onclick='closeMenu(this)'  style = 'font-style: normal; text-shadow: none; font-size: 13px;'>"
					+ tree.data.text + "</a></li>");
			}
			else
			{
				ui = $("<li style='line-height:16px;'>"
						+ "<a class='link' ng-click= \"redirectToUrl('"
						+ tree.data.url
						+ "','"
						+ tree.data.parentid
						+ "')\""
						+ "onclick='closeMenu(this)'  style = 'font-style: normal; text-shadow: none; font-size:13px;'>"
						+ tree.data.text + "</a></li>");
			}
		}
		for (j = 0; j < tree.children.length; j += 1) {
			node = tree.children[j];

			if (ui[0].tagName.toLowerCase() == "li") {
				ui.children('ul').append(rbuild(node));
			} else {
				ui.children('li').append(rbuild(node));
			}
		}

		return ui;
	};

	for (i = 0; i < menuTree.children.length; i += 1) {
		node = menuTree.children[i];
		level1 = $("<li class = 'dropdown dropdownVerticalLine' id='homemodule"
				+ node.data.orderNo
				+ "'><a class='link' "
				+ node.data.url
				+ "' class = 'dropdown-toggle'"
				+ "style = 'text-shadow: none; color: #fff; font-family: Arial; font-style:normal;'"
				+ "padding-left: 0; padding-right: 0; margin: 0 10px;'>"
				+ node.data.text
				+ "<span class='caret' style='border-top-color: #fff; float: right;''></span>"
				+ "</a>" + "<ul class = 'dropdown-menu mega-menu'>" + "<li>"
				+ "<div class = 'yamm-content'>" + "</div></ul></li>");

		/*
		 * if(node.data.id == 2 || node.data.id == 5) {
		 * level1.find('.yamm-content').append('<div><b>Under Construction</b></div><img
		 * alt="under construction img"
		 * src="appResources/images/under-construction.png" style="height:
		 * 150px;width:150px;margin-left:0px;">'); } else {
		 */
		for (j = 0; j < node.children.length; j += 1) {
			level1.find('.yamm-content').append(rbuild(node.children[j]));
		}
		// }
		level0.children('.nav').append(level1);
	}

	return level0;

};

function closeMenu(curElement) {
	var $cur = $(curElement);
	$cur.parents(".dropdown-menu").css('display', 'none');
	$cur.parents(".dropdown-menu").css('display', 'none');
	setTimeout(function() {
		$cur.parents('.dropdown-menu').css('display', '');
	}, 50);
}

// ----------------------------------displayMenu.js-------------------------------------------------------//

/*
 * // Directive to implement Resource Bundle based Internationalization.
 * app.directive('msg', function() { return { restrict : 'EA', link :
 * function(scope, element, attrss) { var key = attrss.key; if (attrss.keyExpr) {
 * scope.$watch(attrss.keyExpr, function(value) { key = value;
 * element.text($.i18n.prop(value)); }); } scope.$watch('language',
 * function(value) { element.text($.i18n.prop(key)); }); } }; });
 */
