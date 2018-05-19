/**
 * this file contains key value pairs for the languages
 */

fileItApp
		.config(function($translateProvider) {
			$translateProvider
					.useSanitizeValueStrategy('escaped')
					.

					translations(
							'en',
							{
								APP_TITLE : "Omnistore - Back Office",
								BACK : "Back",
								ADD_FLOAT_REG_ERR : 'No register is active',
								ADD_FLOAT_OPR_ERR : 'Add float is not allowed in operator accountibility',
								BUSINESS_PERIOD : 'Business Period',
								BUSINESS_DATE : 'Business Date',
								SETTLEMENT_NOT_ALLOWD : "Store settlement not allowed",
								TOTAL_AMOUNT : 'TOTAL AMOUNT',
								SAFE_AMT_ERR : 'Safe Amount should be greater than',
								OFFICE : "Office",
								MANAGER_AUTHORIZATION : 'Manager Authorisation',
								LOYALTY_CARD : 'Loyalty Card',
								MINIMUM_SAFE_AMT_ERR : 'Safe Amount should not be less than :',
								CLOSING_BALANCE_ERR : 'Safe amount is less than last store closing amount :',
								LOGIN : "LOGIN",
								USER_NAME : "USER NAME",
								GIFT_CARD : 'Gift Card',
								FIRST_TIME_USER : 'First time user. Change password to continue',
								USER_NAME_PLACEHOLDER : "Please enter user name",
								PASSWORD_PLACEHOLDER : "Please enter password",
								PWD_CHNGE_MSG : 'Do you want to change password.',
								PASSWORD_CHANGE_SUCCESS : 'Password has been changed successfully.',
								PASSWORD : "PASSWORD",
								CLEAR : "CLEAR",
								More : 'More',
								LOGOUT : "Logout",
								Report_generated_by : 'Report generated by',
								GIFT_VOUCHER : 'Gift Voucher',
								DAILY_OPERATIONS : "Daily Operations",
								CONFIRM_LOGOUT : 'CONFIRM LOGOUT',
								LOGOUT_MSG : 'Are you sure you wish to logoff ?',
								SAFE_FUNCTIONS : "Safe Functions",
								DASH_BOARD : "Dashboard & Reports",
								MAINTENANCE_FUNCTIONS : "Maintenance Functions",
								CONFIGURATIONS : "Configurations",
								PROMOTIONS : "Promotions",
								STORE_BEGIN : "Store Begin",
								REG_TILL_BEGIN : "Register Begin",
								REG_TILL_BEGIN_CAP : 'REGISTER BEGIN',
								REG_TILL_DECLARATION : "Register/Till Declaration",
								REG_END : "Register End",
								REG_END_CAP : "REGISTER END",
								SAFE_INITIALIZATION : "Safe Initialization",
								SAFE_SPOT_CHECK : "Safe Spot Check",
								BANK_RECEIPT : "Bank Receipt",
								CREDIT_DEBIT : 'Credit/Debit',
								CARD : 'Card',
								BANK_DEPOSIT : "Bank Deposit",
								LOAN : "Loan",
								PICKUP : "Pickup",
								PAY_IN_PAY_OUT : "Pay In and Pay Out",
								STORE_SETTLEMENT : "Store Settlement",
								TOTAL : 'Total',
								TOTAL_CAP : 'TOTAL',
								QUANTITY : 'Quantity',
								QUANTITY_CAP : 'QUANTITY',
								CURRENCY : 'Currency',
								CURRENCY_CAP : 'CURRENCY',
								COINS : 'Coins',
								NOTES : 'Notes',
								SOURCE : 'SOURCE',
								TILL : 'Till',
								REGISTER : 'Register',
								Operator_ID : 'Operator ID',
								STANDARD_REPORT : 'Standard Report',
								EXCEPTION_REPORT : 'Exception Report',
								GENERATE_REPORT : 'Generate Report',
								MANAGE_SCHEDULE : 'MANAGE SCHEDULE',
								Terminal_ID : 'Terminal ID',
								Department_ID : 'Dept. Id',
								Order_By : 'Order By',
								From_Date : 'From Date',
								To_Date : 'To Date',
								Select_A_Terminal : 'Select a Terminal',
								Select_A_Safe : 'Select a Safe',
								Select_A_Department : 'Select a Department',
								Sub_Department_ID : 'Sub Dept. Id',
								Select_A_Sub_Department : 'Select a Sub Department',
								REPORT : 'Report',
								SELECT_A_REPORT : 'Select a Report',
								Select_An_Operator : 'Select an Operator',
								Select_Order_By : 'Select Order By',
								CASH : 'Cash',
								INITIALIZE_STORE : "Initialize Store",
								STORE_END : "Store End",
								BUSINESS_DATE : "Business Date",
								SAFE_AMOUNT : "Safe Amount",
								CANCEL : "Cancel",
								CONFIRM : "Confirm",
								DEPOSIT_SOURCE : "Source",
								DEPOSIT_DESTINATION : "Destination",
								DEPOSIT_AMOUNT : "Amount",
								GIFT_CERTIFICATE : 'Gift Certificate',
								STORED_VALUE : 'Stored Value',
								MANUFACTURER_COUPON : 'Manufacturer Coupon',
								BAG_BRAND_ID : "Bag/Brand ID",
								PLUS_SIGN : "+",
								REMARKS : "Remarks",
								CHEQUE : 'Cheque',
								CHEQUE_NO : "Cheque No.",
								BANK_NAME : "Bank",
								SAVE_ADD : "Save & Add",
								SAVE : "Save",
								DATE : "Date",
								STORE : "Store",
								LOAN_SETTLEMENT : "LOAN",
								PICKUP_SETTLEMENT : "PICKUP",
								FLOAT_SETTLEMENT : "FLOAT",
								CHANGE_PASSWORD : "CHANGE PASSWORD",
								UPDATE : "UPDATE",
								USER_ID : "USER ID",
								OLD_PASSWORD : "OLD PASSWORD",
								NEW_PASSWORD : "NEW PASSWORD",
								CONFIRM_PASSWORD : "CONFIRM PASSWORD",
								PASSWORD_REQUIREMENT : "Please enter the following details to change your password.",
								OLD_PASSWORD_PLACEHOLDER : "Enter the old password",
								NEW_PASSWORD_PLACEHOLDER : "Enter the new password",
								CONFIRM_PASSWORD_PLACEHOLDER : "Retype the new password",
								NOTES_CAP : 'NOTES',
								COINS_CAP : 'COINS',
								CHEQUE_NO_CAP : 'CHEQUE NO',
								DATE_CAP : 'DATE',
								BANK_CAP : 'BANK',
								AMOUNT : 'AMOUNT',
								AMOUNT_DECLARATION : 'Amount',
								COUPON_NO : 'COUPON NO',
								VOUCHER_NO : 'VOUCHER NO',
								EXPECTED : 'EXPECTED',
								DECLARED : 'DECLARED',
								OVER : 'OVER',
								SHORT : 'SHORT',
								TENDERS : 'TENDERS',
								TENDER_TYPE : 'Tender Type',
								REGISTER_ID : 'Register Id',
								SAFE_SMALL : 'Safe',
								TILL_NO : 'Till No',
								Select_Register_ID : 'Select Register Id',
								Select_Till_No : 'Select Till No',
								DECLARE : 'Declare',
								EXPECTED_SMALL : 'Expected',
								DECLARED_SMALL : 'Declared',
								OVER_SMALL : 'Over',
								SHORT_SMALL : 'Short',
								REASON_CODE : 'Reason Code',
								TOLERANCE_SMALL : 'Tolerance',
								Select_Reason_Code : 'Select Reason Code',
								RE_ENTER : 'Re-Enter',
								STORE_COUPON : 'Store Credit',
								VALIDATION_MSG : 'You left the field blank.',
								VALIDATION_MSG1 : 'Your field is too short.',
								VALIDATION_MSG2 : 'Your field is too long.',
								VALIDATION_MSG3 : 'Your field has an invalid email address',
								VALIDATION_MSG4 : 'Only Alphanumeric characters are allowed.',
								VALIDATION_MSG5 : 'Only Alphanumeric characters with blank space are allowed.',
								VALIDATION_MSG6 : 'Only positive numbers are allowed.',
								VALIDATION_MSG7 : 'Only Alphabet characters are allowed.',
								VALIDATION_MSG8 : 'Only Alphabet characters with blank space are allowed.',
								VALIDATION_MSG9 : 'Not a valid phone number.',
								VALIDATION_MSG10 : 'Invalid Amount.',
								VALIDATION_MSG144 : 'Amount exceeding limit.',
								VALIDATION_MSG11 : 'Amount is not within the limit.',
								VALIDATION_MSG12 : 'Amount is not within the limit.',
								GRAND_TOTAL : 'Grand Total',
								FORGOT_PWD : 'Forgot Password?',
								CHANGE_PWD : 'Change Password',
								COMPLETED_REGISTER_TILL : 'COMPLETED REGISTER/TILL',
								STORE_END_SUCCESS : 'Store has ended.',
								STORE_BEGIN_SUCCESS : 'Store has begun.',
								STORE_SETTLEMENT_SUCCESS : 'Store Settlement completed  successfully.',
								TILL_DECLARATION_ERR : 'No till available for declaration.',
								WS_LOOKUP_ERR : 'Register has not begun.',
								WS_LOOKUP_ERR_DELAYED : 'Declaration can not be done for same business day.',
								REASON_CODE_ERR : 'Please select reason code.',
								TILL_DECLARATION_SUCCESS : 'Declaration done sucessfully.',
								BANK_DEPOSIT_EMPTY_CHECK_ERROR : 'Please enter an amount.',
								BANK_DEPOSIT_SUCCESS : 'Bank Deposit Done Successfully.',
								BANK_RECEIPT_SUCCESS : 'Bank Receipt Done Successfully.',
								MGR_ROLE_CHECK : 'The Terminal is lock By an another Operator.',
								MGR_ROLE_CHECK_END : 'Do you want to continue',
								timeInterval : 'Time Interval',
								operator : 'Operator',
								terminal : 'Terminal',
								noOfSalesTxn : 'No. Of Sales Transaction',
								noOfItemsSold : 'No. Of Items Sold',
								totalSalesAmount : 'Total Sales Amount',
								totalReturnsAmount : 'Total Returns Amount',
								salesExcludingReturn : 'Sales Excluding Return',
								avgNoOfItems : 'Average No. Of Items',
								avgAmount : 'Average Amount',
								businessDate : 'Business Date',
								avgTxnAmount : 'Average Transaction Amount',
								dollarAmountOverShort : 'Dollar Amount Over / Short',
								noOfPostVoids : 'No. Of Post Voids',
								noOfPriceOverrides : 'No. Of Price Overrides',
								cashier : 'Cashier',
								cash : 'Cash',
								creditCard : 'Credit Card',
								debitCard : 'Debit Card',
								coupon : 'Coupon',
								giftVoucher : 'Gift Voucher',
								giftCard : 'Gift Card',
								giftCertificate : 'Gift Certificate',
								creditNote : 'Credit Note',
								cheque : 'Cheque',
								foreignCurrency : 'Foreign Currency',
								travellersCheque : 'Traveller\'s Cheque',
								cashHire : 'Cash Hire',
								advanceInvoice : 'Advance Invoice',
								loyaltyPoints : 'Loyalty Points',
								totalDiscountAmount : 'Total Discount Amount',
								deptSalesAmount : 'Department Sales Amount',
								percentageOfSalesByQty : 'Percentage Of Sales(By Quantity)',
								percentageOfSalesBySalesAmount : 'Percentage Of Sales(By Sales Amount)',
								department : 'Department',
								subDepartment : 'Sub Department',
								itemCode : 'Item Code',
								itemShortDesc : 'Item Short Description',
								itemSalesAmount : 'Item Sales Amount',
								transactionId : 'Transaction ID',
								transactionDate : 'Transaction Date',
								reasonCode : 'Reason Code',
								TenderSummary : 'Tender Summary',
								Actual : 'Actual',
								SafeSummary : 'Safe Summary',
								SUMMARY : 'Summary',
								Declaration : 'Declaration',
								ADDITION : 'ADDITION',
								SPENDING : 'SPENDING',
								ERR_NOT_AUTH : 'You are not authorized to access this application.',
								OpeningBalance : 'OpeningBalance',
								Float : 'Float',
								PayIn : 'PayIn',
								PayOut : 'PayOut',
								Select : 'Select',
								SUCCESS : 'SUCCESS',
								IDLE_MSG : 'You were idle for too long.Please log in.',
								ERROR : 'ERROR',
								WARNING : 'WARNING',
								NO : 'NO',
								YES : 'YES',
								MAINTAIN_EMPLOYEE : 'Maintain Employee',
								CREATE_EMPLOYEE : 'Create Employee',
								CREATE_EMPLOYEE_HEADER : 'CREATE EMPLOYEE',
								UPDATE_EMPLOYEE : 'Update Employee',
								ASSIGN_ROLES_EMPLOYEE : 'Assign Roles for Employee',
								FIRST_NAME : 'First Name',
								MIDDLE_NAME : 'Middle Name',
								LAST_NAME : 'Last Name',
								EMAIL : 'Email',
								PHONE : 'Phone',
								MOBILE : 'Mobile',
								WORKER_TYPE : 'Worker Type',
								WORKER_PHOTO : 'Worker Photograph',
								CHOOSE_FILE : 'Choose File',
								BROWSE : 'Browse',
								UPLOAD : 'Upload',
								SPL_REQUIREMNTS : 'Special Requirements',
								STATUS : 'Status',
								EFF_END_DATE : 'Effective End Date',
								ALL_FIELDS_MANDATORY : 'All the fields are mandatory',
								SEARCH : 'Search',
								EDIT : 'Edit',
								EMPLOYEE_DETAILS : 'Employee Details',
								ASSIGN_ROLES : 'Assign Roles',
								SELECT_ROLES : 'Select Roles',
								GO : 'Go',
								RESET_PASSWORD_MSG : 'Please click on Reset Button to confirm Reset.',
								UNLOCK_ACCOUNT_MESSAGE : 'Would you like to Unlock Your Account?',
								EMP_ID : 'Employee ID',
								Assign_Roles : 'Assign Roles',
								STORE_BUS_UNIT : 'Store/Business Unit',
								EFF_FROM : 'Effective From',
								EFF_TO : 'To',
								ROLE : 'Role',
								GENERATE_PASSWORD : 'Generate Password',
								EMAIL_PASSWORD : 'Email Password',
								Reset_Password : 'Reset Password',
								RESET : 'Reset',
								Unlock_Account : 'Unlock Account',
								SELECTALL : 'Select All',
								STATUS : 'STATUS',
								OPENINGCASH : 'OPENING AMOUNT',
								REG_BUSINESS_DATE : "BUSINESS DATE",
								CONFIRMATION : "CONFIRMATION",
								REG_BEGIN_MODAL_MSG : "Do you want to open the Register(s)?",
								REG_END_MODAL_MSG : "Do you want to End the Register(s)?",
								NO_TILL_AVAILABLE : "No till available for this workstation.",
								STATUS : 'Status',
								OPR_EFF_STRT_DATE : 'Operator Start date',
								OPR_EFF_END_DATE : 'Operator End Date',
								OPERATOR_ID : 'Operator ID',
								OPR_STATUS : 'Operator Status',
								BUSINESS_UNIT : 'Business Unit',
								ASSIGNED_EFF_STRT_DATE : 'Assigned Start Date',
								ASSIGNED_EFF_END_DATE : 'Assigned End Date',
								WORKER_ID : 'Worker ID',
								EFF_STRT_DATE : 'Effective Start Date',
								OPR_ID : 'Operator ID',
								LOAN_SUMMARY : 'Loan',
								COUPON : 'Coupon',
								BANK_RECIEPT_MSG : 'Bank Receipt completed successfully.',
								BANK_DEPOSITE_MSG : 'Bank Deposit completed successfully.',
								BANK_DEPOSITE : 'BANK DEPOSIT',
								BANK_RECEIPT_CAP : 'BANK RECEIPT',
								PICKUP_CAPS : 'PICKUP',
								PICKUP_SUMMARY : 'Pickup',
								LOAN_CAP : 'LOAN',
								Register_Till_declaration : 'REGISTER/TILL DECLARATION',
								Store_Begin : 'STORE BEGIN',
								OmniStore_build_version : 'OmniStore Version No:',
								STORE_SETTLEMENT_CAP : 'STORE SETTLEMENT',
								REGISTER_TILL : "Register/Till",
								TENDERS_CAPS : "Tenders",
								FIELDS_MARKED : 'Fields marked ',
								ARE_MANDATORY : ' are mandatory.',
								OK : 'OK',
								TILL_ID : 'Till Id',
								SAFE_ID : 'Safe Id',
								REMARKS_REFERENCE : 'Remarks/Reference',
								NO_DATA : 'No data available.',
								STORE_DECLARATION : 'STORE SETTLEMENT- DECLARATION',
								UPDATE_EMPLOYEE_HEADER : 'UPDATE EMPLOYEE',
								ASSIGN_ROLES_HEADER : 'ASSIGN ROLES',
								REGISTER_PICKUP : 'Register',
								TILL_PICKUP : 'Till',
								REFERENCE : 'Reference',
								COUPON_NO : 'Coupon No.',
								CHEQUE_NO : 'Cheque No.',
								CLEAR_CAPS : 'Clear',
								NO_SEARCH_RESULTS : 'No Employee found.',
								OPERATOR_NOT_CREATED : 'Operator could not be created successfully.',
								SAFE_PAYIN_SUCCESS : 'Safe Pay In is successfully completed.',
								SAFE_PAYOUT_SUCCESS : 'Safe Pay Out is successfully completed.',
								REGISTER_PAYIN_SUCCESS : 'Register Pay In is successfully completed.',
								REGISTER_PAYOUT_SUCCESS : 'Register Pay Out is successfully completed.',
								ISSUE_LOAN_SUCCESS : 'Issue Loan done successfully',
								DO_YOU_WANT_TO_OPEN_STORE : 'Do you want to  open the Store for the Business Date',
								DO_YOU_WANT_TO_CLOSE_STORE : 'Do you want to  End the Store for the Business Date',
								BUSINESS_PERIOD : 'Business Period',
								ISSUE_LOAN_SUCCESS : 'Issue Loan done successfully',
								ADD_FLOAT : 'Add Float',
								ADD_FLOAT_CAPS : 'ADD FLOAT',
								AMOUNT : 'Amount',
								REGISTER_ID_CAPS : 'REGISTER ID',
								STATUS_CAPS : 'STATUS',
								AMOUNT_CAPS : 'AMOUNT',
								BUSINESS_DATE_CAPS : 'BUSINESS DATE',
								SELECTALL_CAPS : 'SELECT ALL',
								SUCCESS : 'SUCCESS',
								ADD_FLOAT_SUCC_MSG : 'Float issued successfully',
								ADD_FLOAT_CINFIRMATION_MSG : 'Do you want to add float to the register(s)?',
								transactiondatetime : 'Transaction Date Time',
								transactiontype : 'Transaction Type',
								transactionid : 'Transaction Id',
								amount : 'Amount',
								declarationdate : 'Declaration Date',
								tendertype : 'Tender Type',
								openingamount : 'Opening Amount',
								floatamount : 'Float Amount',
								expectedamount : 'Expected Amount',
								declaredamount : 'Declared Amount',
								overshortamount : 'Over/Short Amount',
								settlementdate : 'Settlement Date',
								safeid : 'Safe Id',
								payinamount : 'Pay in Amount',
								payoutamount : 'Pay out Amount',
								loanamount : 'Loan Amount',
								pickupamount : 'Pick up Amount',
								bankdepositamount : 'Bank Deposit Amount',
								bankreceiptamount : 'Bank Receipt Amount',
								bankdesc : 'Business Date and Time of Bank Deposit',
								bankname : 'Bank Name',
								bagid : 'Bag/Brand ID',
								refid : 'Ref ID'
							});

		});