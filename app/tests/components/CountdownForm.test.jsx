var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var CountdownForm = require('CountdownForm')

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist()
    })

    it('should call onSetCountdown if valid seconds entered', () => {
        expect(CountdownForm).toExist()
    })
})
