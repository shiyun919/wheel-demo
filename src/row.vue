<template>
	<div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}" :class="rowClass">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: '',
		props: {
			gutter: {
				type: [Number, String]
			},
			align: {
				type: String,
				validator(){
					return ['left', 'right', 'center'].includes(value)
				}
				
			}
		},
		computed: {
			rowClass(){
				let {align} = this    //align = this.align
				return [align && `align-${align}`]
			}
		},
		created(){
			console.log('row created')
		},
		mounted(){
			console.log('row mounted')
			console.log(this.$children)
			this.$children.forEach((vm)=>{
				vm.gutter = this.gutter
			})
		}
	}
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
		margin-bottom: 12px;
		flex-wrap: wrap-reverse;
		&.align-left {
			justify-content: flex-start;
		}
		&.align-right {
			justify-content: flex-end;
		}
		&.align-center {
			justify-content: center;
		}
	}
</style>

