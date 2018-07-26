import * as matchers from 'jest-immutable-matchers'
import {List, Map} from 'immutable'

describe('x', () => {
	describe('a number', () => {
		function addMovie (currentState, movie) {
			return currentState.set(
				'movies',
				currentState.get('movies').push(movie)
			);
		}

		it('is immutable', () => {
			let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
			let nextState = addMovie(state, 'Sunshine')

			expect(nextState).toEqual(
				Map({
					movies: List.of('Trainspotting', '28 Days Later', 'Sunshine')
				})
			)
			expect(state).toEqual(
				Map({
					movies: List.of('Trainspotting', '28 Days Later')
				})
			)
		});
	});
})