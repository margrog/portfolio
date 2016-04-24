$(function() {
  // Init
  $('.MovieProject').each(function(i, project) {
    var $project = $(project);
    var vimeoId = $project.data('vimeo-id');
    var iframe = document.querySelector('#vimeoplayer'+vimeoId);
    var player = $f(iframe);
    var isPlaying = false;

    player.addEvent('ready', function() {

      player.addEvent('play', function() {
        isPlaying = true;
        updateState('play');
      });

      player.addEvent('pause', function() {
        isPlaying = false;
        updateState('pause');
      });
    });

    $project.find('.Icon--play').on('click', function() {
      player.api('play');
      updateState('play');
    });

    $project.find('.Icon--pause').on('click', function() {
      player.api('pause');
      updateState('pause');
    });

    // Full screen
    var isFullscreen = false;
    var onEnter = function() {
      isFullscreen = true;
      updateState('fullscreenEnter');
    }

    var onExit = function() {
      isFullscreen = false;
      updateState('fullscreenExit');
    }

    $project.find('.Icon--fullscreenEnter').on('click', function() {
      if (BigScreen.enabled) {
        // BigScreen.toggle(this);
        BigScreen.request(iframe, onEnter, onExit);
      }
    });

    $project.find('.Icon--fullscreenExit').on('click', function() {
      if (BigScreen.enabled) {
        BigScreen.exit(iframe);
      }
    });


    var updateState = function(state) {
      if (state === 'play') {
        // Button state
        $project.find('.Icon--play').hide();
        $project.find('.Icon--text').hide();
        $project.find('.Icon--pause').show();
        // Fullscreen button state
        if (isFullscreen) {
          $project.find('.Icon--fullscreenEnter').hide();
          $project.find('.Icon--fullscreenExit').show();
        } else {
          $project.find('.Icon--fullscreenEnter').show();
          $project.find('.Icon--fullscreenExit').hide();
        }
        // Element state
        $project.find('.MovieProject-still').hide();// Needed only once
        $project.find('.MovieProject-title').fadeOut();
      } else if (state === 'pause') {
        // Button state
        $project.find('.Icon--play').show();
        $project.find('.Icon--pause').hide();
        if (!isFullscreen) $project.find('.Icon--text').show();
        // Fullscreen button state
        if (isFullscreen) {
          $project.find('.Icon--fullscreenEnter').hide();
          $project.find('.Icon--fullscreenExit').show();
        } else {
          $project.find('.Icon--fullscreenEnter').hide();
          $project.find('.Icon--fullscreenExit').hide();
        }
        // Element state
        $project.find('.MovieProject-title').fadeIn();
        $project.find('.Icon--fullscreenEnter').hide();
      // Fullscreen button state
      } else if (state === 'fullscreenEnter') {
        $project.find('.Icon--fullscreenEnter').hide();
        $project.find('.Icon--fullscreenExit').show();
      } else if (state === 'fullscreenExit') {
        if (isPlaying) {
          $project.find('.Icon--fullscreenEnter').show();
        } else {
          $project.find('.Icon--fullscreenEnter').hide();
          $project.find('.Icon--text').show();
        }
        $project.find('.Icon--fullscreenExit').hide();
      }
    };

    // initial state
    updateState('pause');
  });

  // $('.Index-grid').fullpage({
  // });
  // $('.MovieProjects').fullpage({
  //   sectionSelector: '.MovieProject',
  //   normalScrollElements: 'Index-header'
  // });


});
