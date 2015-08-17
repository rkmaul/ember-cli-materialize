import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/md-table';

const { Component, computed } = Ember;

export default Component.extend(ParentComponentSupport, {
  tagName: 'table',
  layout,
  columns: null,
  composableChildrenDebounceTime: 1,
  init() {
    this._super(...arguments);
    this.set('columns', Ember.A());
  },

  columnComponents: computed.alias('composableChildren'),

  registerChildComponent(childComponent) {
    this.get('_childComponents').add(childComponent, childComponent.get('key'));
    this._notifyComposableChildrenChanged();
  },

  unregisterChildComponent(childComponent) {
    this.get('_childComponents').delete(childComponent, childComponent.get('key'));
    this._notifyComposableChildrenChanged();
  }
});
