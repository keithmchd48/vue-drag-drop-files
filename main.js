var app = new Vue({
  el: '#app',
  data() {
    return {
      files: [],
    }
  },
  methods: {
    addFile(e) {
      let files = e.dataTransfer.files;
      console.log(files);
      [...files].forEach(file => {
        this.files.push(file);
        console.log(this.files)
      });
    },
    removeFile(file) {
      this.files = this.files.filter(f => {
        return f != file;
      });
    },
  }
})
