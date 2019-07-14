import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SearchingResults extends Vue {
  @Prop() private cityName!: string;
}