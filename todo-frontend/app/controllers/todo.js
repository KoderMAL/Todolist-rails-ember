import Controller from '@ember/controller';

export default Controller.extend({
  isEdit: false,
  actions: {
    addTodo: function () {
      const newTodo = this.store.createRecord('todo', {
        title: this.get('todo'),
      });
      newTodo.save();
      this.set('todo', '');
      this.transitionToRoute('/todo');
    }
 }
});