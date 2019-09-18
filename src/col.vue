<template>
	<div class="col" :class="colClass" :style="colStyle">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		props: {
			span: {
				type: [Number, String]
			},
			offset: {
				type: [Number, String]
			},
			phone: {
				type: Object,
				validator(value){
					let keys = Object.keys(value)
					let valid = true   //声明默认key在数组['span','offset']内
					keys.forEach((key)=>{
						if(!['span', 'offset'].includes(key)){
							valid = false
						}
					})
					return
				}
				
			},
			ipad: {
				type: Object,
				validator(value){
					let keys = Object.keys(value)
					let valid = true   //声明默认key在数组['span','offset']内
					keys.forEach((key)=>{
						if(!['span', 'offset'].includes(key)){
							valid = false
						}
					})
					return
				}
				
			},
			narrowerPc: {
				type: Object,
				validator(value){
					let keys = Object.keys(value)
					let valid = true   //声明默认key在数组['span','offset']内
					keys.forEach((key)=>{
						if(!['span', 'offset'].includes(key)){
							valid = false
						}
					})
					return valid 
				}
				
			}
		},
		data() {
			return {
				gutter: 0
			}
		},
		computed: {
			colClass() {
				let {span, offset, phone, ipad, narrowerPc} = this // let span = this.span    let offset = this.offset
			
				return [
					span ? `col-${span}` : '',
					offset ? `offset-${offset}` : '',
					... (phone ? [`col-phone-${phone.span}`]: []),
					... (ipad ? [`col-ipad-${ipad.span}`]: []),
					... (narrowerPc ? [`col-narrowerPc-${narrowerPc.span}`]: []),
				]
			},
			colStyle() {
				return {
					paddingLeft: this.gutter / 2 + 'px',
					paddingRight: this.gutter / 2 + 'px'
				}
			}
		},

	}
</script>


<style lang="scss" scoped>
	.col {

		& .content {
			padding: 25px 0px;
		}

		&:nth-child(2n)>.content {
			background: #b2b3b5;

		}

		&:nth-child(2n+1)>.content {
			background: #ced0d2;
		}
		
	
			$class-prefix: col-; //class类名前缀
			
			// loops through 24 times
			@for $n from 1 through 24 {
			
				// for each $col_#{n} 
				&.#{$class-prefix}#{$n} {
					width: ($n/24) * 100%;
				}
			}
			
			
			$class-prefix: offset-; //class类名前缀
			
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n/24) * 100%;
				}
			}
		
		@media (min-width:577px) {
			$class-prefix: col-ipad-; //class类名前缀
			
			// loops through 24 times
			@for $n from 1 through 24 {
			
				// for each $col_#{n} 
				&.#{$class-prefix}#{$n} {
					width: ($n/24) * 100%;
				}
			}
			
			
			$class-prefix: offset-ipad-; //class类名前缀
			
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n/24) * 100%;
				}
			}
		}
		@media (min-width:769px) {
			$class-prefix: col-narrowerPc-; 
			
			// loops through 24 times
			@for $n from 1 through 24 {
			
				// for each $col_#{n} 
				&.#{$class-prefix}#{$n} {
					width: ($n/24) * 100%;
				}
			}
			
			
			$class-prefix: offset-narrowerPc-; 
			
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n/24) * 100%;
				}
			}
		}
		@media (min-width:993px) {
			$class-prefix: col-narrowerPc-; 
			
			// loops through 24 times
			@for $n from 1 through 24 {
			
				// for each $col_#{n} 
				&.#{$class-prefix}#{$n} {
					width: ($n/24) * 100%;
				}
			}
			
			
			$class-prefix: offset-narrowerPc-; 
			
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n/24) * 100%;
				}
			}
		}
	}
</style>
