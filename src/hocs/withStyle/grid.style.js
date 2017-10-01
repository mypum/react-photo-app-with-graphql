export default `
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

.col {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
}

.span {
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.span-1 {
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
}

.span-2 {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}

.span-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.span-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.span-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
}

.span-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.span-7 {
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
}

.span-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}

.span-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.span-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
}

.span-11 {
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
}

.span-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.push-1 {
  left: 8.33333%;
}

.push-2 {
  left: 16.66667%;
}

.push-3 {
  left: 25%;
}

.push-4 {
  left: 33.33333%;
}

.push-5 {
  left: 41.66667%;
}

.push-6 {
  left: 50%;
}

.push-7 {
  left: 58.33333%;
}

.push-8 {
  left: 66.66667%;
}

.push-9 {
  left: 75%;
}

.push-10 {
  left: 83.33333%;
}

.push-11 {
  left: 91.66667%;
}

.push-12 {
  left: 100%;
}

.pull-1 {
  right: 8.33333%;
}

.pull-2 {
  right: 16.66667%;
}

.pull-3 {
  right: 25%;
}

.pull-4 {
  right: 33.33333%;
}

.pull-5 {
  right: 41.66667%;
}

.pull-6 {
  right: 50%;
}

.pull-7 {
  right: 58.33333%;
}

.pull-8 {
  right: 66.66667%;
}

.pull-9 {
  right: 75%;
}

.pull-10 {
  right: 83.33333%;
}

.pull-11 {
  right: 91.66667%;
}

.pull-12 {
  right: 100%;
}

@media screen and (min-width: 480px) {
  .xs {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .xs-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .xs-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .xs-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .xs-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .xs-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .xs-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .xs-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .xs-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .xs-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .xs-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .xs-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .xs-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .xs-push-1 {
    left: 8.33333%;
  }
  .xs-push-2 {
    left: 16.66667%;
  }
  .xs-push-3 {
    left: 25%;
  }
  .xs-push-4 {
    left: 33.33333%;
  }
  .xs-push-5 {
    left: 41.66667%;
  }
  .xs-push-6 {
    left: 50%;
  }
  .xs-push-7 {
    left: 58.33333%;
  }
  .xs-push-8 {
    left: 66.66667%;
  }
  .xs-push-9 {
    left: 75%;
  }
  .xs-push-10 {
    left: 83.33333%;
  }
  .xs-push-11 {
    left: 91.66667%;
  }
  .xs-push-12 {
    left: 100%;
  }
  .xs-pull-1 {
    right: 8.33333%;
  }
  .xs-pull-2 {
    right: 16.66667%;
  }
  .xs-pull-3 {
    right: 25%;
  }
  .xs-pull-4 {
    right: 33.33333%;
  }
  .xs-pull-5 {
    right: 41.66667%;
  }
  .xs-pull-6 {
    right: 50%;
  }
  .xs-pull-7 {
    right: 58.33333%;
  }
  .xs-pull-8 {
    right: 66.66667%;
  }
  .xs-pull-9 {
    right: 75%;
  }
  .xs-pull-10 {
    right: 83.33333%;
  }
  .xs-pull-11 {
    right: 91.66667%;
  }
  .xs-pull-12 {
    right: 100%;
  }
}

@media screen and (min-width: 640px) {
  .sm {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .sm-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .sm-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .sm-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .sm-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .sm-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .sm-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .sm-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .sm-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .sm-push-1 {
    left: 8.33333%;
  }
  .sm-push-2 {
    left: 16.66667%;
  }
  .sm-push-3 {
    left: 25%;
  }
  .sm-push-4 {
    left: 33.33333%;
  }
  .sm-push-5 {
    left: 41.66667%;
  }
  .sm-push-6 {
    left: 50%;
  }
  .sm-push-7 {
    left: 58.33333%;
  }
  .sm-push-8 {
    left: 66.66667%;
  }
  .sm-push-9 {
    left: 75%;
  }
  .sm-push-10 {
    left: 83.33333%;
  }
  .sm-push-11 {
    left: 91.66667%;
  }
  .sm-push-12 {
    left: 100%;
  }
  .sm-pull-1 {
    right: 8.33333%;
  }
  .sm-pull-2 {
    right: 16.66667%;
  }
  .sm-pull-3 {
    right: 25%;
  }
  .sm-pull-4 {
    right: 33.33333%;
  }
  .sm-pull-5 {
    right: 41.66667%;
  }
  .sm-pull-6 {
    right: 50%;
  }
  .sm-pull-7 {
    right: 58.33333%;
  }
  .sm-pull-8 {
    right: 66.66667%;
  }
  .sm-pull-9 {
    right: 75%;
  }
  .sm-pull-10 {
    right: 83.33333%;
  }
  .sm-pull-11 {
    right: 91.66667%;
  }
  .sm-pull-12 {
    right: 100%;
  }
}

@media screen and (min-width: 768px) {
  .md {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .md-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .md-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .md-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .md-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .md-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .md-push-1 {
    left: 8.33333%;
  }
  .md-push-2 {
    left: 16.66667%;
  }
  .md-push-3 {
    left: 25%;
  }
  .md-push-4 {
    left: 33.33333%;
  }
  .md-push-5 {
    left: 41.66667%;
  }
  .md-push-6 {
    left: 50%;
  }
  .md-push-7 {
    left: 58.33333%;
  }
  .md-push-8 {
    left: 66.66667%;
  }
  .md-push-9 {
    left: 75%;
  }
  .md-push-10 {
    left: 83.33333%;
  }
  .md-push-11 {
    left: 91.66667%;
  }
  .md-push-12 {
    left: 100%;
  }
  .md-pull-1 {
    right: 8.33333%;
  }
  .md-pull-2 {
    right: 16.66667%;
  }
  .md-pull-3 {
    right: 25%;
  }
  .md-pull-4 {
    right: 33.33333%;
  }
  .md-pull-5 {
    right: 41.66667%;
  }
  .md-pull-6 {
    right: 50%;
  }
  .md-pull-7 {
    right: 58.33333%;
  }
  .md-pull-8 {
    right: 66.66667%;
  }
  .md-pull-9 {
    right: 75%;
  }
  .md-pull-10 {
    right: 83.33333%;
  }
  .md-pull-11 {
    right: 91.66667%;
  }
  .md-pull-12 {
    right: 100%;
  }
}

@media screen and (min-width: 960px) {
  .lg {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .lg-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .lg-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .lg-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .lg-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .lg-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .lg-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .lg-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .lg-push-1 {
    left: 8.33333%;
  }
  .lg-push-2 {
    left: 16.66667%;
  }
  .lg-push-3 {
    left: 25%;
  }
  .lg-push-4 {
    left: 33.33333%;
  }
  .lg-push-5 {
    left: 41.66667%;
  }
  .lg-push-6 {
    left: 50%;
  }
  .lg-push-7 {
    left: 58.33333%;
  }
  .lg-push-8 {
    left: 66.66667%;
  }
  .lg-push-9 {
    left: 75%;
  }
  .lg-push-10 {
    left: 83.33333%;
  }
  .lg-push-11 {
    left: 91.66667%;
  }
  .lg-push-12 {
    left: 100%;
  }
  .lg-pull-1 {
    right: 8.33333%;
  }
  .lg-pull-2 {
    right: 16.66667%;
  }
  .lg-pull-3 {
    right: 25%;
  }
  .lg-pull-4 {
    right: 33.33333%;
  }
  .lg-pull-5 {
    right: 41.66667%;
  }
  .lg-pull-6 {
    right: 50%;
  }
  .lg-pull-7 {
    right: 58.33333%;
  }
  .lg-pull-8 {
    right: 66.66667%;
  }
  .lg-pull-9 {
    right: 75%;
  }
  .lg-pull-10 {
    right: 83.33333%;
  }
  .lg-pull-11 {
    right: 91.66667%;
  }
  .lg-pull-12 {
    right: 100%;
  }
}

@media screen and (min-width: 1280px) {
  .xl {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .xl-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .xl-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .xl-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .xl-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .xl-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .xl-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .xl-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .xl-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .xl-push-1 {
    left: 8.33333%;
  }
  .xl-push-2 {
    left: 16.66667%;
  }
  .xl-push-3 {
    left: 25%;
  }
  .xl-push-4 {
    left: 33.33333%;
  }
  .xl-push-5 {
    left: 41.66667%;
  }
  .xl-push-6 {
    left: 50%;
  }
  .xl-push-7 {
    left: 58.33333%;
  }
  .xl-push-8 {
    left: 66.66667%;
  }
  .xl-push-9 {
    left: 75%;
  }
  .xl-push-10 {
    left: 83.33333%;
  }
  .xl-push-11 {
    left: 91.66667%;
  }
  .xl-push-12 {
    left: 100%;
  }
  .xl-pull-1 {
    right: 8.33333%;
  }
  .xl-pull-2 {
    right: 16.66667%;
  }
  .xl-pull-3 {
    right: 25%;
  }
  .xl-pull-4 {
    right: 33.33333%;
  }
  .xl-pull-5 {
    right: 41.66667%;
  }
  .xl-pull-6 {
    right: 50%;
  }
  .xl-pull-7 {
    right: 58.33333%;
  }
  .xl-pull-8 {
    right: 66.66667%;
  }
  .xl-pull-9 {
    right: 75%;
  }
  .xl-pull-10 {
    right: 83.33333%;
  }
  .xl-pull-11 {
    right: 91.66667%;
  }
  .xl-pull-12 {
    right: 100%;
  }
}

`
