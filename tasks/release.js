module.exports = function(grunt){
  grunt.registerTask('release', 'Release a new ember-validatable version', function(type){
    type = type || 'patch';

    grunt.task.run('build');
    grunt.task.run('copy:release');
    grunt.task.run('publish:'+type);
  });
};
