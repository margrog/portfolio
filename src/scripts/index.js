$(function() {
  // Init
  $('.MovieProject').each(function(i, project) {
    var $project = $(project);
    var vimeoId = $project.data('vimeo-id');
    var iframe = document.querySelector('#vimeoplayer'+vimeoId);
    var player = $f(iframe);

    player.addEvent('ready', function() {

      player.addEvent('pause', function() {
        updateState($project, 'pause');
      });
      player.addEvent('play', function() {
        updateState($project, 'play');
      });
      // player.addEvent('finish', onFinish);
      // player.addEvent('playProgress', onPlayProgress);
      //
      // Play movie
      // debugger

    });

    $project.find('.Icon--play').on('click', function() {
      player.api('play');
      updateState($project, 'play');
    });

    $project.find('.Icon--pause').on('click', function() {
      player.api('pause');
      updateState($project, 'pause');
    });
  });
});


var updateState = function($project, state) {
  if (state === 'play') {
    $project.find('.Icon--play').hide();
    $project.find('.Icon--text').hide();
    $project.find('.Icon--pause').show();

    $project.find('.MovieProject-still').hide();

    // TODO
    $project.find('.Icon--fullscreenEnter').show();
    $project.find('.Icon--fullscreenExit').hide();
  } else if (state === 'pause') {
    $project.find('.Icon--play').show();
    $project.find('.Icon--text').show();
    $project.find('.Icon--pause').hide();
    
    // TODO
    $project.find('.Icon--fullscreenEnter').hide();
    $project.find('.Icon--fullscreenExit').hide();
  }
};
