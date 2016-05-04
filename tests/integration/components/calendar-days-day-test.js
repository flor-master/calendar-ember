import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calendar-days-day', 'Integration | Component | calendar days day', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{calendar-days-day}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#calendar-days-day}}
      template block text
    {{/calendar-days-day}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
