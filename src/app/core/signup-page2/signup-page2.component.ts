import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-signup-page2',
	templateUrl: './signup-page2.component.html',
	styleUrls: ['./signup-page2.component.scss']
})
export class SignupPage2Component implements OnInit {

	constructor() { }

	ngOnInit(): void {

		$(document).ready(function () {

			$("#branchNameCheck").hide();
			$("#nameCheck").hide();
			$("#contactNoCheck").hide();
			$("#contactNoDigitCheck").hide();
			$("#onlyNumberCheck").hide();

			let branchNameError = true;
			let nameError = true;
			let contactError = true;

			function validateBranchName() {
				let branchNameValue = $("#branchName").val();
				if (branchNameValue.length == "") {
					$("#branchNameCheck").show();
					branchNameError = false;
				} else if (branchNameValue.length < 3 || branchNameValue.length > 10) {
					$("#branchNameCheck").show();
					// $("#usercheck").html("**length of username must be between 3 and 10");
					branchNameError = false;
				} else {
					branchNameError = true;
					$("#branchNameCheck").hide();
				}
			}

			function validateName() {
				let nameValue = $("#name").val();
				if (nameValue.length == "") {
					$("#nameCheck").show();
					nameError = false;
				} else if (nameValue.length < 3 || nameValue.length > 10) {
					$("#nameCheck").show();
					// $("#usercheck").html("**length of username must be between 3 and 10");
					nameError = false;
				} else {
					nameError = true;
					$("#nameCheck").hide();
				}
			}



			function validatContact() {
				let contactValue = $("#contactNo").val();
				if (contactValue.length == "") {
					$("#contactNoCheck").show();
					$("#contactNoDigitCheck").hide();
					contactError = false;
				} else if (contactValue.length < 10 || contactValue.length > 10) {
					$("#contactNoDigitCheck").show();
					$("#contactNoCheck").hide();
					contactError = false;
				} else {
					$("#contactNoDigitCheck").hide();
					$("#contactNoCheck").hide();
					contactError = true;
				}
			}

			$("#submitbtn").click(function () {
				validateBranchName();
				validateName();
				validatContact();
				if (
					branchNameError == true &&
					nameError == true && contactError == true
				) {
					//TODO write ajax request
					return true;
				} else {
					//Don't submit Invalid form & return false
					return false;

				}
			});
		});

	}

	onlyNumberKey(event: any) {
		if (event.target.value.length > 9) {
			return false;
		}
		// Only ASCII character in that range allowed 
		var ASCIICode = (event.which) ? event.which : event.keyCode
		if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
			$("#onlyNumberCheck").show();
			$("#contactNoDigitCheck").hide();
			$("#contactNoCheck").hide();
			return false;
		} else {
			$("#onlyNumberCheck").hide();
			return true;
		}
	}



}
