.. _advanced_packaging:

=========
Packaging
=========

One of the awesome features of Interleave is that is can be used to generate different module specific (`CommonJS`_, `AMD`_, etc) versions of your library from a single source file.  This is not the default functionality of Interleave, but can be enabled by specifying a ``--wrap`` option when running your build.

One of the primary reasons to consider using Interleave's packaging is to enable to reuse other library code without having to get stressed about implementing module specific ``require``, ``define``, etc calls to include the required libraries.  This is something that Interleave will take care of for you in the packaged files.

To specify a dependency, you can simply use the :ref:`findme` module requirement syntax:

.. code-block:: javascript

	// req: underscore as _

or to request a particular version:

.. code-block:: javascript

	// req: underscore 1.3.x as _

A Packaging Example
===================

Let's work through a small, somewhat contrived example of a library that is designed for 'fonging' (a term from the movie `A Knight's Tale`_).  Now, ``fong.js`` is going to need underscore to operate correctly, so we'll need to include a ``// req:`` comment:

.. literalinclude:: ../../examples/fong/src/fong.js
	:language: javascript

While this is an extremely trival and contrived example it helps to demonstrate a few key points:

- There are no CommonJS `require` statements in the library to include underscore.
- There are no export mechanisms (globbing, module.exports or AMD define) to expose the functionality of this module.
- The code is not wrapped in a closure, thus you might think the generated code would horribly pollute the global scope (in a more complicated example).

Building our Packages
=====================

Building our appropriately packaged, distribution files is very simple::

	interleave build src/*.js --wrap

Using the ``--wrap`` option with no arguments instructs Interleave that you want to generate packages for the common package types (amd, commonjs and glob).  If you would like to generate only some of these package types you can specify ``--wrap=amd,commonjs`` or something similar.

AMD
---

.. literalinclude:: ../../examples/fong/dist/amd/fong.js
	:language: javascript

CommonJS (Node)
---------------

.. literalinclude:: ../../examples/fong/dist/commonjs/fong.js
	:language: javascript

Globbing
--------

.. literalinclude:: ../../examples/fong/dist/glob/fong.js
	:language: javascript

.. include:: ../links.txt