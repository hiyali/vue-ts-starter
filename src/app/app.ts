  import Vue from 'vue'
  // import { Vue, Component, Prop } from 'vue-property-decorator'
  import Component from 'vue-class-component'

  @Component({
    name: 'App',
    props: {
      msg: String,
    },
  })
  export default class App extends Vue {
    // @Prop() msg: string

    private name = 'app'
  }
