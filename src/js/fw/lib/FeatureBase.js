/**
 *  FeatureBase class
 *
 *
 *  @author  Howard.Zuo
 *  @date    Nov 19, 2015
 *
 */
'use strict';
import angular from 'angular';

class FeatureBase {

    constructor(name) {
        this.export = name;
        this.mod = angular.module(this.export, []);
        this.run = this.mod.run;
        this.controller = this.mod.controller;
        this.service = this.mod.service;
        this.factory = this.mod.factory;
        this.directive = this.mod.directive;
    }

    beforeStart() {}

    execute() {}
}

export default FeatureBase;