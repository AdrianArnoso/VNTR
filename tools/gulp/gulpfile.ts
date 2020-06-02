import {
    BuildHelper,
    BuildConfig,
    BuildEnvironment,
    BuildGulpPlugins,
  } from '@morphe/build-angular';

  const config = new BuildConfig();
  const helper = new BuildHelper(config);

  BuildGulpPlugins.gulp.task('upgrade-version', (done: any) =>
    helper.upgradePackageVersion(BuildEnvironment.Debug, done));

  BuildGulpPlugins.gulp.task('i18n', () => helper.i18n());
  BuildGulpPlugins.gulp.task('create-manifest', () => helper.createManifestFile());
  BuildGulpPlugins.gulp.task('verify-package-list-debug', () => helper.verifyPackageList(BuildEnvironment.Debug));
  BuildGulpPlugins.gulp.task('clean-debug', () => helper.clean(BuildEnvironment.Debug));
  BuildGulpPlugins.gulp.task('build-debug', helper.buildAppTask(BuildEnvironment.Debug));
  BuildGulpPlugins.gulp.task('rebuild-debug', BuildGulpPlugins.gulp.series(['clean-debug', 'create-manifest', 'build-debug']));
  BuildGulpPlugins.gulp.task('watch-debug', helper.watchAppTask(BuildEnvironment.Debug));

  BuildGulpPlugins.gulp.task('verify-package-list-release', () => helper.verifyPackageList(BuildEnvironment.Release));
  BuildGulpPlugins.gulp.task('clean-release', () => helper.clean(BuildEnvironment.Release));
  BuildGulpPlugins.gulp.task('build-release', helper.buildAppTask(BuildEnvironment.Release));
  BuildGulpPlugins.gulp.task('rebuild-release', BuildGulpPlugins.gulp.series(['clean-release', 'create-manifest', 'build-release']));
  BuildGulpPlugins.gulp.task('watch-release', helper.watchAppTask(BuildEnvironment.Release));

  BuildGulpPlugins.gulp.task('default', () => BuildGulpPlugins.gulp.series(['rebuild-debug']));