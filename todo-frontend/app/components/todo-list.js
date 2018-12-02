import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['isDone'],
  isEditing: false,
  actions: {
    deleteTodo: function (todo) {
     todo.deleteRecord();
     todo.save();
   },
   toggleTodo: function (todo) {
     let isDone = todo.get('done');
     todo.set('done', !isDone);
     todo.save();
   },
   editTodo: function() {
      this.set('isEditing', true);
   },
   cancelEdit: function () {
      this.set('isEditing', false);
   },
   updateTodo: function (todo) {
       const title = this.get('model.title');
       todo.setProperties({
         title
       });
       todo.save().then( () =>  this.set('isEditing', false) );
   }
 },
});