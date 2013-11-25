﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    var schemaDB = {
        tables: [{
            name: 'Events',
            columns:
            [
                {
                    name: "id",
                    type: "number",
                    identity: true,
                    autoIncrement: true
                },
                { name: "title", type: "string" },
                { name: "start", type: "date" },
                { name: "end", type: "date" },
                { name: "isAllDay", type: "boolean" },
                { name: "recurrenceId", type: "number" },
                { name: "recurrenceRule", type: "string" },
                { name: "description", type: "string" },
                { name: "recurrenceException", type: "string" },
                { name: "startTimeZone", type: "string" },
                { name: "endTimeZone", type: "string" }
            ]
        }]
    };

    var transport = {
        type: "dataStorage",
        transport: {
            read: {
                data: {
                    dbName: "SchedulerDB",
                    tableName: "Events"
                }
            },
            create: {
                data: {
                    dbName: "SchedulerDB",
                    tableName: "Events"
                }
            },
            update: {
                data: {
                    dbName: "SchedulerDB",
                    tableName: "Events"
                }
            },
            destroy: {
                data: {
                    dbName: "SchedulerDB",
                    tableName: "Events"
                }
            }
        }
    };

    var schema = {
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { from: "id", type: "number", nullable: true },
                    title: { from: "title", validation: { required: true } },
                    start: { from: "start", type: "date" },
                    end: { from: "end", type: "date" },
                    isAllDay: { from: "isAllDay", type: "boolean" },
                    recurrenceId: { from: "recurrenceId", type: "number" },
                    recurrenceRule: { from: "recurrenceRule", type: "string" },
                    description: { from: "description", type: "string" },
                    recurrenceException: { from: "recurrenceException", type: "string" },
                    startTimeZone: { from: "startTimeZone", type: "string" },
                    endTimeZone: { from: "endTimeZone", type: "string" }
                }
            }
        }
    };


    WinJS.Namespace.define("Scheduler.Data", {
        dataSource: new Telerik.Data.SchedulerDataSource({
            type: "dataStorage",
            transport: {
                read: {
                    data: {
                        dbName: "SchedulerDB",
                        tableName: "Events"
                    }
                },
                create: {
                    data: {
                        dbName: "SchedulerDB",
                        tableName: "Events"
                    }
                },
                update: {
                    data: {
                        dbName: "SchedulerDB",
                        tableName: "Events"
                    }
                },
                destroy: {
                    data: {
                        dbName: "SchedulerDB",
                        tableName: "Events"
                    }
                }
            },
            schema: {
                model: {
                    id: "id",
                    fields: {
                        id: { from: "id", type: "number", nullable: true },
                        title: { from: "title", validation: { required: true } },
                        start: { from: "start", type: "date" },
                        end: { from: "end", type: "date" },
                        isAllDay: { from: "isAllDay", type: "boolean" },
                        recurrenceId: { from: "recurrenceId", type: "number" },
                        recurrenceRule: { from: "recurrenceRule", type: "string" },
                        description: { from: "description", type: "string" },
                        recurrenceException: { from: "recurrenceException", type: "string" },
                        startTimeZone: { from: "startTimeZone", type: "string" },
                        endTimeZone: { from: "endTimeZone", type: "string" }
                    }
                }
            }
        })
    });

    var db;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }

            db = Telerik.Data.Database.open("SchedulerDB", "local", schemaDB);
            db.serializeObject = false;

            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
