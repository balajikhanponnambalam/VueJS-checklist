Vue.component('customertable',{
	template: 
		`<div id="cust_table">
		<input type="checkbox" id="deleteName" v-on:click="$emit(\'removecustomer\')">
		{{list.firstName}}			
		</div>`,
		props:['list','index'],
	data : function() {
		return {
			name:'balaji',
		}
	},
	methods : {
		
	},
});
var vm = new Vue({
	el:'#customerApp',
	data: {
		msg:"balaji",	
		firstName : '',
		lastName : '',
		address : '',
		tableName:'',
		todoList : [],
		completedList : [],
	},
	methods : {
		addCheckList : function() {
			this.todoList.push({
				firstName : this.firstName,
				lastName : this.lastName,
				address :this.address,	
				tableName : 'todoList',			
			});
			this.firstName = '';
			this.lastName = '';
			this.address = '';
		}, 
		completedListMethod : function(index,value) {
			if(value.tableName == 'todoList') {
				this.todoList.splice(index,1);
				value.tableName = 'completedList';
				this.completedList.push(value);
			} else {
				this.completedList.splice(index,1);
				value.tableName = 'todoList';
				this.todoList.push(value);
			}
			
		},
	}
	
});
