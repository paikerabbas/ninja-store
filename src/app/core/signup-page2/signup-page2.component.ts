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

			let branchNameError = true;
			let nameError = true;

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

			$("#submitbtn").click(function () {
				validateBranchName();
				validateName();
				if (
					branchNameError == true &&
					nameError == true
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



}
