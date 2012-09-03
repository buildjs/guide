A Simple Build
==============

While it's difficult to illustrate how useful Interleave using a simple example, it will help to understand some of the fundamental approaches of it and the BuildJS tool suite.  

For our simple example, we will look at some code that makes use of the `String.trim`_ function.  Now while this function is available in most browsers, it's not available in all so we should probably include a shim to ensure our code works as expected.

Our very simple code would look something like:

.. literalinclude::	../../examples/simple/simple-full.js
	:language: js

Now, let's move the shim into a file of it's own to keep our file as "clean" as possible:

.. literalinclude:: ../../examples/simple/simple.js
	:language: js

In the code above, the significant line is the ``//= shims/trim`` comment.  In the BuildJS stack, single-line comments that have an equals character right after the single-line comment start characters is a :ref:`rigger` directive.

While we focus primarily on JS code in our guide, the directives can also be applied to CSS (``/*= foo */``) and precompiled languages like CoffeeScript (``#= foo``).

.. admonition:: To be completed

	- include information on using remote includes
	- include information on using Rigger aliases


.. include:: ../links.txt