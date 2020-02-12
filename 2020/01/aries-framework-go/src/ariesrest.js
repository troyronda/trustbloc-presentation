/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

'use strict'

import axios from 'axios';

/* @class AriesREST provides Aries agent functions. */
export const AriesREST = function(agentURL) {

    this.didexchange = {
        createInvitation: async function(data) {
            const endpoint = agentURL + "/connections/create-invitation"
            return axios.post(endpoint, data)
        },
        receiveInvitation: async function(data) {
            const endpoint = agentURL + "/connections/receive-invitation"
            return axios.post(endpoint, data)
        },
        acceptInvitation: async function() {
            // TODO
            // POST /connections/{id}/accept-invitation
        },
        acceptExchangeRequest: async function() {
            // TODO
            // POST /connections/{id}/accept-request
        },
        createImplicitInvitation: async function(data) {
            const endpoint = AriesREST._agentURL + "/connections/create-implicit-invitation"
            return axios.post(endpoint, data)
        },
        removeConnection: async function() {
            // TODO
            // POST /connections/{id}/remove
        },
        queryConnectionByID: async function(connectionID) {
            const endpoint = agentURL + "/connections/" + connectionID
            return axios.get(endpoint)
        },
        queryConnections: async function() {
            const endpoint = agentURL + "/connections"
            return axios.get(endpoint)
        }
    }

    this.messaging = {
        registeredServices: async function() {
            const endpoint = AriesREST._agentURL + "/message/services"
            return axios.get(endpoint)
        },
        registerMessageService: async function(data) {
            const endpoint = agentURL + "/message/register-service"
            return axios.post(endpoint, data)
        },
        registerHTTPMessageService: async function(data) {
            const endpoint = AriesREST._agentURL + "/http-over-didcomm/register"
            return axios.post(endpoint, data)
        },
        unregisterMessageService: async function(data) {
            const endpoint = agentURL + "/message/unregister-service"
            return axios.post(endpoint, data)
        },
        sendNewMessage: async function(data) {
            const endpoint = agentURL + "/message/send"
            return axios.post(endpoint, data)
        },
        sendReplyMessage: async function(data) {
            const endpoint = AriesREST._agentURL + "/message/reply"
            return axios.post(endpoint, data)
        }
    }

    this.router = {
        register: async function(data) {
            const endpoint = agentURL + "/route/register"
            return axios.post(endpoint, data)
        },
        unregister: async function(data) {
            const endpoint = agentURL + "/route/unregister"
            return axios.delete(endpoint, data)
        },
    }
}

export const AriesWebHook = function(webhookURL) {
    this.topics = {
        check: async function() {
            const endpoint = webhookURL + "/checktopics"
            return axios.get(endpoint);
        }
    }
}
