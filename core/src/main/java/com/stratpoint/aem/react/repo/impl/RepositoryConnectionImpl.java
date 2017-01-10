package com.stratpoint.aem.react.repo.impl;

import com.day.cq.wcm.api.PageManager;
import com.stratpoint.aem.react.repo.RepositoryConnection;

import javax.jcr.Session;

import org.apache.sling.api.resource.ResourceResolver;

public class RepositoryConnectionImpl implements RepositoryConnection {

	private ResourceResolver resourceResolver;

	public RepositoryConnectionImpl(ResourceResolver resourceResolver) {
		this.resourceResolver = resourceResolver;
	}

	@Override
	public void close() {
		resourceResolver.close();
	}

	@Override
	public PageManager getPageManager() {
		return getResourceResolver().adaptTo(PageManager.class);
	}

	@Override
	public ResourceResolver getResourceResolver() {
		return resourceResolver;
	}

	@Override
	public Session getSession() {
		return resourceResolver.adaptTo(Session.class);
	}

}
