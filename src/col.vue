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
		},
		data() {
			return {
				gutter: 0
			}
		},
		computed: {
			colClass() {
				let {
					span,
					offset
				} = this // let span = this.span    let offset = this.offset
				return [span && `col-${span}`, offset && `offset-${offset}`]
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
		width: 50%;


		$class-prefix: col-; //class类名前缀

		// loops through 24 times
		@for $n from 1 through 24 {

			// for each $col_#{n} 
			&.#{$class-prefix}#{$n} {
				width: ($n/24) * 100%;

				// set the background-color to cornflowerblue and 
				// each time lighten the color slightly
				//background-color: darken(cornflowerblue, 0% + ($n / 2));
			}
		}



		$class-prefix: offset-; //class类名前缀

		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n/24) * 100%;
			}
		}

		& .content {
			padding: 25px 0px;
		}

		&:nth-child(2n)>.content {
			background: rgb(121, 183, 255);

		}

		&:nth-child(2n+1)>.content {
			background: rgb(55, 141, 241);
		}

	}
</style>
