import {List, Map} from 'immutable';

import {setEntries, next} from '../src/core';

describe('application logic', () => {

	describe('set entries', () => {
		it('adds the entries to the state', () => {
      const state = Map();
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(state, entries);
      expect(nextState).toEqual(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
	})

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      });
      const nextState = next(state);
      expect(nextState).toEqual(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List.of('Sunshine')
      }));
    });

  });

});