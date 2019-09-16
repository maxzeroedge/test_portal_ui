<template>
	<div>
		<Header/>
		<dynamic-component :pageJson="pageJson" />
		<v-container>
			<v-layout xs12 justify-center class="text-center">
				<v-flex>
					<v-menu offset-y transition="slide-y-transition">
						<template v-slot:activator="{ on }">
							<v-btn color="blue" dark style="font-size: 5em" v-on="on">
								<v-icon>
									mdi-plus-circle-outline
								</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								v-for="(item, index) in items"
								:key="index"
								@click="addNewItem(item, index)" >
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-flex>
			</v-layout>
		</v-container>
		<v-btn color="green" outlined @click="saveTest">
			Save
		</v-btn>
	</div>
</template>

<script>
	import Header from "@/components/Header";
	import DynamicComponent from "@/components/sub_components/DynamicComponent";

	export default {
		components: {
			Header,
			DynamicComponent
		},
		data (){
			return {
				pageJson: [],
				items: [
					{
						title: "Text",
						type: "TextComponent",
						content: "<textarea />"
					},
					{
						title: "MCQ Options",
						type: "RadioComponent",
						contents: [
							{
								"id": 1,
								"label": "<textarea />",
								"value": "Value 1"
							},
							{
								"id": 2,
								"label": "<textarea />",
								"value": "Value 2"
							},
							{
								"id": 3,
								"label": "<textarea />",
								"value": "Value 3"
							},
							{
								"id": 4,
								"label": "<textarea />",
								"value": "Value 4"
							}
						]
					},
					{
						title: "Code Block",
						type: "CodeAreaComponent"
					}
				]
			}
		},
		mounted(){
			// if(this.$store.state.pageJson && !this.$store.state.pageJson.length){
			// 	this.$store.dispatch('getPageJson');
			// }
		},
		methods: {
			addNewItem(item, index){
				let itemToPush = this.items.filter(v=>{
					return v.type == item.type
				})[0]
				itemToPush.id = this.pageJson.length + 1
				this.pageJson.splice(index, 0, itemToPush)
			},
			saveTest(){
				// TODO:
			}
		}
	};
</script>
